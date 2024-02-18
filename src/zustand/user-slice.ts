import type { StateCreator } from 'zustand'
import type { UserSlice } from './store'

type ImmerStateCreator<T> = StateCreator<
  T,
  [['zustand/immer', never], never],
  [],
  T
>

export const createUserSlice: ImmerStateCreator<UserSlice> = set => ({
  user: {
    name: null,
    email: null,
    avatarURL: { url: '' },
    userTheme: 'light',
    token: null
  },
  signup: (email: string) =>
    set(state => {
      state.user.email = email
    })
})
