import React from 'react'

const ChildComponent = React.memo(({ data }) => { // memoiza el componente completo, solo cambia si cambian sus props
  return (
    <div>{data}</div>
  )
})
export default ChildComponent