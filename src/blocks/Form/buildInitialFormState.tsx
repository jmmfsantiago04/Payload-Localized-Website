import type { FormFieldBlock, NumberField, CheckboxField, SelectField } from '@payloadcms/plugin-form-builder/types'

export const buildInitialFormState = (fields: FormFieldBlock[]) => {
  return fields?.reduce((initialSchema, field) => {
    if (field.blockType === 'checkbox') {
      const checkboxField = field as CheckboxField
      return {
        ...initialSchema,
        [checkboxField.name]: checkboxField.defaultValue || false,
      }
    }
    if (field.blockType === 'country') {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
    if (field.blockType === 'email') {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
    if (field.blockType === 'text') {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
    if (field.blockType === 'select') {
      const selectField = field as SelectField
      return {
        ...initialSchema,
        [selectField.name]: selectField.defaultValue || '',
      }
    }
    if (field.blockType === 'state') {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
    if (field.blockType === 'number') {
      const numberField = field as NumberField
      return {
        ...initialSchema,
        [numberField.name]: numberField.defaultValue || null,
      }
    }
    if (field.blockType === 'textarea') {
      return {
        ...initialSchema,
        [field.name]: '',
      }
    }
    if (field.blockType === 'message') {
      return initialSchema // message fields don't need initial state
    }

    // Default case for any unhandled field types
    return {
      ...initialSchema,
      [field.name]: '',
    }
  }, {}) || {}  // Return empty object if fields is undefined/null
}
