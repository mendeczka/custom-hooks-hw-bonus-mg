import { useRandomColor } from './hooks/useRandomColor.ts'

export const RandomColor = () => {
  const color = useRandomColor('light')

  if (!color) return null

  return (
    <div
      style={{
        width: 300,
        height: 300,
        backgroundColor: color,
      }}
    ></div>
  )
}
