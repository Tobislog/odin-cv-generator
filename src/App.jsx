import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput.jsx';
import Button from './components/Button.jsx';

function App() {
  const [text, setText] = useState('');

  const handleSave = () => {

  }

  return (
    
    <>
      <h1>React CV-Maker</h1>
      <div id="page">
        <div className="left">
          <section className="formSection">
            <h2>General Information</h2>
            <form id="generalForm">
              <TextInput label="Vorname" />
              <TextInput label="Nachname" />
              <TextInput label="Geburtsdatum" type="date" />
              <TextInput label="E-Mail" type="email" />
              <TextInput label="Phone" type="tel" />
              <Button text="Save" />
            </form>
          </section>
          <section className="formSection">
            <h2>Educational Experiences</h2>
            <form>
              <TextInput label="School Name" />
              <TextInput label="Title of Study" />
              <TextInput label="Beginn" type="date" />
              <TextInput label="Ende" type="date" />
              <Button text="Save" />
            </form>
          </section>
          <section className="formSection">
            <h2>Practical Experiences</h2>
            <form>
              <TextInput label="Company Name" />
              <TextInput label="Role" />
              <TextInput label="Responsibilities" />
              <TextInput label="Start" type="date"/>
              <TextInput label="End" type="date"/>
              <Button text="Save" />
            </form>
          </section>
        </div>
        <div className="right">
          <div className="cvRender">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
