import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

type LocalizedLabel = {
  [key: string]: string
}

export const Textarea: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
    rows?: number
    locale?: string
    label: string | LocalizedLabel
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  rows = 3,
  width,
  locale = 'en'
}) => {
    // Get localized label and placeholder
    const localizedLabel = typeof label === 'object' ? (label[locale] || label['en'] || Object.values(label)[0]) : label
    const placeholder = locale === 'ko' ? '메시지를 입력하세요...' : 'Type your message...'

    return (
      <Width width={width}>
        <div className="w-full sm:w-[560px] h-[220px] sm:min-h-[220px] flex flex-col gap-5">
          <Label htmlFor={name} className="text-base font-medium leading-6 tracking-normal text-gray-700">
            {localizedLabel}
            {requiredFromProps && <span className="text-red-500 ml-1">*</span>}
          </Label>

          <TextAreaComponent
            defaultValue={defaultValue}
            id={name}
            rows={rows}
            placeholder={placeholder}
            className="w-full h-full border border-[#E5E7EB] rounded-[22px] px-4 pt-[15px] pb-8 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder:text-[#D4D4D4] placeholder:text-base placeholder:font-medium placeholder:leading-6 placeholder:tracking-normal"
            {...register(name, { required: requiredFromProps })}
          />

          {requiredFromProps && errors[name] && <Error locale={locale} />}
        </div>
      </Width>
    )
  }
