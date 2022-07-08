import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type User = {
  fullName: string
  email: string
  score: number
}

interface IUserContext {
  user: User
  updateUser: (updatedData: Partial<User>) => void
}

export const useStore = create<IUserContext>()(
  persist(
    immer(
      set => ({
        user: {
          fullName: '',
          email: '',
          score: 0,
        },
        updateUser: (newUserData) => set((state) => {
          state.user = { ...state.user, ...newUserData }
        })
      })
    ),
    {
      name: 'user-store-persist',
      getStorage: () => window.sessionStorage
    }
  )
)
