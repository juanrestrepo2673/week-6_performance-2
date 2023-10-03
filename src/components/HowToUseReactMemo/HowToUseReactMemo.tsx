import { useEffect, useState } from "react"
import ChildComponent from "./ChildComponent";
import SearchBar from "./SearchBar";
import HowToUseUseMemo from "../HowToUseUseMemo/HowToUseUseMemo";



export default function HowToUseReactMemo() {

  const [data, setData] = useState(33)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({})
  const [error, setError] = useState(null)
  const [mainQuery, setMainQuery] = useState(9999)



  const handleSubmitParent = (query) => {
    setMainQuery(query)

    console.count('handle submit parent')

    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(res => res.json())
      .then(res => {
        setResponse(res.results[0])
        setLoading(false)
        console.log(res)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      }
      )

  };


  useEffect(() => {
    const interval = setInterval(() => {
      setData(33)
    }, 1000);

    return () => clearInterval(interval)
  })


  return (
    <>
      <SearchBar onSubmit={handleSubmitParent} />

      <ChildComponent data={data} />

      <HowToUseUseMemo max={mainQuery} />
    </>
  )
}
