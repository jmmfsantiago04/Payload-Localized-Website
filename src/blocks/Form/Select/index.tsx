import type { SelectField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { Controller } from 'react-hook-form'

import { Error } from '../Error'
import { Width } from '../Width'

type LocalizedLabel = {
  [key: string]: string
}

type LocalizedOption = {
  label: string | LocalizedLabel
  value: string
}

export const Select: React.FC<
  SelectField & {
    control: Control<FieldValues, any>
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    locale?: string
    label: string | LocalizedLabel
    options: LocalizedOption[]
  }
> = ({ name, control, errors, label, options, required, width, locale = 'en' }) => {
  // Get localized label
  const localizedLabel = typeof label === 'object' ? (label[locale] || label['en'] || Object.values(label)[0]) : label
  const placeholderText = locale === 'ko' ? '-선택-' : '-Select-'

  return (
    <Width width={width}>
      <div className="w-full sm:w-[560px] h-[112px] sm:min-h-[112px] flex flex-col gap-5">
        <Label htmlFor={name} className="text-base font-medium leading-6 tracking-normal text-gray-700">
          {localizedLabel}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
        <Controller
          control={control}
          defaultValue=""
          name={name}
          render={({ field: { onChange, value } }) => {
            const controlledValue = options.find((t) => t.value === value)

            return (
              <SelectComponent onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
                <SelectTrigger
                  className="w-full border border-[#E5E7EB] rounded-[22px] px-4 py-8 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[#D4D4D4] text-base font-medium leading-6 tracking-normal"
                  id={name}
                >
                  <SelectValue placeholder={placeholderText} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded-[22px] shadow-lg">
                  {options.map(({ label: optionLabel, value }) => {
                    const localizedOptionLabel = typeof optionLabel === 'object'
                      ? (optionLabel[locale] || optionLabel['en'] || Object.values(optionLabel)[0])
                      : optionLabel
                    return (
                      <SelectItem key={value} value={value} className="px-4 py-2 hover:bg-gray-50">
                        {localizedOptionLabel}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </SelectComponent>
            )
          }}
          rules={{ required }}
        />
        {required && errors[name] && <Error locale={locale} />}
      </div>
    </Width>
  )
}
