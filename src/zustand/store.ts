import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createUserSlice } from './user-slice'

export type UserSlice = {
  user: {
    name: string | null
    email: string | null
    avatarURL: { url: string }
    userTheme: string
    token: string | null
  }
}

export const useBoundStore = create<UserSlice>()(
  immer((...a) => ({
    ...createUserSlice(...a)
  }))
)
