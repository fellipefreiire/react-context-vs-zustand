import { useUser } from "../../Store/UserContext"

export const ScoreCard = () => {
  const { user, updateUser } = useUser()

  return (
    <div>
      <input
        type='text'
        value={user?.score}
        onChange={e => updateUser({ score: parseInt(e.target.value) })}
        placeholder='Score'
      />
    </div>
  )
}