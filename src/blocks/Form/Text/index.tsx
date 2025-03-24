import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error } from '../Error'
import { Width } from '../Width'

type LocalizedLabel = {
  [key: string]: string
}

export const Text: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
    locale?: string
    label: string | LocalizedLabel
  }
> = ({ name, defaultValue, errors, label, register, required: requiredFromProps, width, locale = 'en' }) => {
  // Get localized label and placeholder
  const localizedLabel = typeof label === 'object' ? (label[locale] || label['en'] || Object.values(label)[0]) : label
  const placeholder = locale === 'ko' ? `예: ${localizedLabel}` : `e.g ${localizedLabel}`

  return (
    <Width width={width}>
      <div className="w-full sm:w-[560px] h-[112px] sm:min-h-[112px] flex flex-col gap-5">
        <Label htmlFor={name} className="text-base font-medium leading-6 tracking-normal text-gray-700">
          {localizedLabel}
          {requiredFromProps && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Input
          defaultValue={defaultValue}
          id={name}
          type="text"
          placeholder={placeholder}
          className="w-full border border-[#E5E7EB] rounded-[22px] px-4 py-8 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#D4D4D4] placeholder:text-base placeholder:font-medium placeholder:leading-6 placeholder:tracking-normal"
          {...register(name, { required: requiredFromProps })}
        />
        {requiredFromProps && errors[name] && <Error locale={locale} />}
      </div>
    </Width>
  )
}
