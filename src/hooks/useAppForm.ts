import { valibotResolver } from '@hookform/resolvers/valibot'
import { useForm, type DefaultValues, type FieldValues } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'
import type { BaseSchema } from 'valibot'

export const useAppForm = <T extends FieldValues>(
  schema: BaseSchema,
  options?: {
    defaultValues?: DefaultValues<T>
    persistedKey?: string
  }
) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    setValue,
    trigger,
    clearErrors,
    formState: { errors, isValid }
  } = useForm<T>({
    defaultValues: options?.defaultValues,
    resolver: valibotResolver(schema),
    mode: 'onChange'
  })

  options &&
    options.persistedKey &&
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFormPersist(options.persistedKey, {
      watch,
      setValue,
      storage: window.localStorage
    })

  return {
    register,
    handleSubmit,
    errors,
    control,
    isValid,
    reset,
    trigger,
    clearErrors
  }
}
