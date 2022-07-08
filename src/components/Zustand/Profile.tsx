import { useStore } from "../../Store/Zustand"

export const Profile = () => {
  const fullName = useStore(s => s.user.fullName)
  const email = useStore(s => s.user.email)
  const updateUser = useStore(s => s.updateUser)

  return (
    <div>
      <input
        type='text'
        value={fullName}
        onChange={e => updateUser({ fullName: e.target.value })}
        placeholder='Full Name'
      />
      <input
        type='email'
        value={email}
        onChange={e => updateUser({ email: e.target.value })}
        placeholder='Email'
      />
    </div>
  )
}