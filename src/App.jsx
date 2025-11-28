import { useState } from 'react'
// import Boolean from "./components/useStateHook/Boolean"
// import TextInput from "./components/useStateHook/TextInput"
// import Counter from "./components/useStateHook/Counter"
import './App.css'
// import Example1 from './components/useEffectHook/Example1'
import Example2 from './components/useEffectHook/Example2'
import Example3 from './components/useEffectHook/Example3'
import LocalStorage from './components/LocalStorage'
// import UseRefHooks from './components/useEffectHook/page'
import UseRefHook from './components/UseRefHook'
import UseMemoHoook from './components/UseMemoHoook'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
  {/* <Boolean/> */}
  {/* <TextInput/>  */}
  {/* <Counter/>  */}
  {/* <Example1/> */}
  {/* <Example2/> */}
  {/* <Example3/> */}
  {/* <Example4/> */}
  {/* <UseRefHooks/>      */}
  {/* <LocalStorage/>      */}
  {/* <UseRefHook/>      */}
  <UseMemoHoook/>     
    </>
  )
}

export default App
