import { useNumbers } from './hooks/useNumbers.ts'

export const Numbers = () => {
  const { numbers, handleNumbersGen, deleteNumber } = useNumbers()

  return (
    <div>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>
            <p>{num}</p>
            <button onClick={() => deleteNumber(index)}>Usuń</button>
          </li>
        ))}
      </ul>
      <button onClick={handleNumbersGen}>Generuj</button>
    </div>
  )
}
