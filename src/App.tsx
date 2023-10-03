import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HowToUseReactMemo from './components/HowToUseReactMemo/HowToUseReactMemo'
import HowToUseUseMemo from './components/HowToUseUseMemo/HowToUseUseMemo'
import HowUseCallBackAndMemo from './components/HowUseCallBackAndMemo/HowUseCallBackAndMemo'
import HowToUseReactLazy from './components/HowToUseReactLazy/HowToUseReactLazy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <hr/>
      <h2>React Memo</h2>
      <HowToUseReactMemo />
      <hr/>
      <h2>Hook useMemo</h2>
      <HowToUseUseMemo />
      <hr/>
      <h2>UseCallBack and Memo </h2>
      <HowUseCallBackAndMemo/> */}
      <hr/>
      <h2>Lazy Loading </h2>
      <HowToUseReactLazy/>

    </>
  )
}

export default App
