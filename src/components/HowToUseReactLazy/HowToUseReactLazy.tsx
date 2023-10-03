import { Suspense, lazy } from 'react'
import ComponentA from './ComponentA'
//  import ComponentB from './ComponentB'

 const ComponentB = lazy(() => import('./ComponentB'))

export default function HowToUseReactLazy() {
  return (
    <div>Main
      <ComponentA />
      <Suspense fallback={<div>Loading</div>}>
        <ComponentB />
      </Suspense>
    </div>
  )
}
