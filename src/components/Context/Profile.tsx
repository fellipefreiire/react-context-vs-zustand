import { useUser } from "../../Store/UserContext"

export const Profile = () => {
  const { user, updateUser } = useUser()

  return (
    <div>
      <input
        type='text'
        value={user?.fullName}
        onChange={e => updateUser({ fullName: e.target.value })}
        placeholder='Full Name'
      />
      <input
        type='email'
        value={user?.email}
        onChange={e => updateUser({ email: e.target.value })}
        placeholder='Email'
      />
    </div>
  )
}