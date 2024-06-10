import { useState } from 'react'

export const useNumbers = () => {
  const [numbers, setNumbers] = useState<number[]>([])

  const handleNumbersGen = () => {
    const num = Math.round(Math.random() * 100000)
    setNumbers((prevNum) => [...prevNum, num])
  }
  const deleteNumber = (indexToDelete: number) => {
    setNumbers((prevNumbers) =>
      prevNumbers.filter((_, index) => index !== indexToDelete),
    )
  }
  return {
    numbers,
    handleNumbersGen,
    deleteNumber,
  }
}
