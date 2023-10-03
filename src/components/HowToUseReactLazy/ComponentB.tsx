
export default function ComponentB() {

  const sum = () => {
    let total = 0

    for (let i = 0; i < 99999999; i++) {
      total += i
    }
    return total
  }


  return (
    <div>ComponentB {sum()}</div>
  )
}
