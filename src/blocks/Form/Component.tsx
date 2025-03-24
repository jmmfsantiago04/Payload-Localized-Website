'use client'
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'

import { buildInitialFormState } from './buildInitialFormState'
import { fields } from './fields'
import { useTranslations } from 'next-intl'

export type Value = unknown

export interface Property {
  [key: string]: Value
}

export interface Data {
  [key: string]: Property | Property[]
}

type LocalizedMessage = {
  [key: string]: string
}

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: {
    [k: string]: unknown
  }[]
  locale?: string
  confirmationMessage?: string | LocalizedMessage | null
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect } = {},
    introContent,
    locale = 'en'
  } = props

  const formMethods = useForm({
    defaultValues: buildInitialFormState(formFromProps.fields),
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()
  const t = useTranslations()

  // Get localized messages
  const localizedConfirmationMessage = confirmationMessage && typeof confirmationMessage === 'object'
    ? (confirmationMessage[locale] || confirmationMessage['en'] || Object.values(confirmationMessage)[0])
    : confirmationMessage

  const localizedLoadingText = locale === 'ko' ? '로딩 중...' : 'Loading...'
  const localizedErrorText = locale === 'ko' ? '문제가 발생했습니다.' : 'Something went wrong.'

  const onSubmit = useCallback(
    (data: Data) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
              locale: locale
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || (locale === 'ko' ? '서버 오류' : 'Internal Server Error'),
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect
            const redirectUrl = url
            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: localizedErrorText,
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType, locale, localizedErrorText],
  )

  return (
    <div className="container max-w-full lg:max-w-[48rem] pb-20">
      <FormProvider {...formMethods}>
        {enableIntro && introContent && !hasSubmitted && (
          <RichText className="mb-8" content={introContent} enableGutter={false} />
        )}
        {!isLoading && hasSubmitted && confirmationType === 'message' && localizedConfirmationMessage && (
          <RichText content={localizedConfirmationMessage} />
        )}
        {isLoading && !hasSubmitted && <p>{localizedLoadingText}</p>}
        {error && <div className="text-red-500">{`${error.status || '500'}: ${error.message || ''}`}</div>}
        {!hasSubmitted && (
          <form id={formID} onSubmit={handleSubmit(onSubmit)} className="bg-[#F5F9FF] rounded-lg p-4 sm:p-5 md:p-6 shadow-sm relative w-full max-w-[800px] mx-auto">
            <div
              className="absolute inset-0 opacity-10 rounded-lg"
              style={{
                backgroundImage: 'url("/images/topography.svg")',
                backgroundRepeat: 'repeat',
                backgroundSize: '500px'
              }}
            />
            <div className="relative z-10">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {formFromProps &&
                  formFromProps.fields &&
                  formFromProps.fields?.map((field, index) => {
                    const Field: React.FC<any> = fields?.[field.blockType]
                    if (Field) {
                      return (
                        <div key={index} className="w-full max-w-[600px] mx-auto px-2 sm:px-4 md:px-6">
                          <Field
                            form={formFromProps}
                            {...field}
                            {...formMethods}
                            control={control}
                            errors={errors}
                            register={register}
                            locale={locale}
                          />
                        </div>
                      )
                    }
                    return null
                  })}
              </div>
            </div>
          </form>
        )}
      </FormProvider>
    </div>
  )
}
