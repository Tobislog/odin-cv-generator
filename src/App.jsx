import { useState } from 'react'
import './App.css'
import TextInput from './components/TextInput.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React CV-Maker</h1>
      <section id="general">
        <h3>General Information</h3>
        <form>
          <TextInput id="1" name="Vorname"/>
          <TextInput id="2" name="Nachname"/>
        </form>
      </section>
      <section id="education">
        <h3>Educational Experiences</h3>
        <form>

        </form>
      </section>
      <section id="practical">
        <h3>Practical Experiences</h3>
        <form>

        </form>
      </section>
    </>
  )
}

export default App
