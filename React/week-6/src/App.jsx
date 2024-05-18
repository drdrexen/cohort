import { useState } from "react"


function App() {
  return (
    <>
      <HeaderWithButton />
      <Header title="My surname is Subedi" />
    </>
  )

}

function HeaderWithButton() {
  const [title, setTitle] = useState("My name is Nischal")

  function changeTitle() {
    setTitle("My name is " + Math.random())
  }
  return (
    <>
      <button onClick={changeTitle}>Click me to update title</button>
      <Header title={title} />
    </>
  )
}


function Header({ title }) {
  return (
    <>
      <div>{title}</div>
    </>
  )
}

export default App;