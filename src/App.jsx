import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput.jsx';
import Button from './components/Button.jsx';

function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <h1>React CV-Maker</h1>
      <section id="general">
        <h3>General Information</h3>
        <form>
          <TextInput label="Vorname" />
          <TextInput label="Nachname" />
          <TextInput label="Geburtsdatum" type="date"/>
          <TextInput label="Geburtsort" />
          <Button text="Hallo!" />
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
