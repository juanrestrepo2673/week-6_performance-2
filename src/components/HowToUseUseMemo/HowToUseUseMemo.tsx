import { useMemo, useState } from "react"

interface HowToUseUseMemoProps {
  max: number
}

export default function HowToUseUseMemo({ max }: HowToUseUseMemoProps) {


  const sum = useMemo(() => {
    let total = 0

    for (let i = 0; i < max; i++) {
      total += i
    }
    return total
  }, [max])


  return (
    <div>Suma de numeros:  {sum}</div>
  )
}
