import { useCallback, useState, useMemo } from 'react'

export default function HowUseCallBackAndMemo() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => { // memoiza la definicion de la funcion
    setCount((prevCount) => prevCount + 1)
  }, []);

  const double = useMemo(() => count * 2, [count]) // memoiza el resultado de la funcion

  return (
    <div>
      <button onClick={incrementCount}>Incrementar</button>
      <p>Count: {count}</p>
      <p>Double: {double}</p>
    </div>
  )
}
