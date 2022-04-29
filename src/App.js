import React from 'react'

const App = () => (
  <div
    tabIndex={0}
    role="button"
    onKeyDown={() => console.log('si')}
    onClick={() => console.log('hola')}
  >
    Hola Archi Gay
  </div>
)

export default App
