import { useStore } from "../../Store/Zustand"

export const ScoreCard = () => {
  const score = useStore(s => s.user.score)
  const updateUser = useStore(s => s.updateUser)

  return (
    <div>
      <input
        type='text'
        value={score}
        onChange={e => updateUser({ score: parseInt(e.target.value) })}
        placeholder='Score'
      />
    </div>
  )
}