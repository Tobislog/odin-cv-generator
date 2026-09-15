import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput.jsx';
import Button from './components/Button.jsx';
import GeneralSection from './components/GeneralSection.jsx';

const defaultGeneralInfo = {
  firstName: 'Your',
  lastName: 'Name',
  birthDate: '1990-01-01',
  email: 'yourmail@yourprovider.com',
  phone: '0123 4567890'
};

function App() {

  // Finaler Sate für CV, wird bei Klick auf Save gefüllt.
  const [savedGeneralInfo, setSavedGeneralInfo] = useState(defaultGeneralInfo);

  return (
    
    <>
      <h1>React CV-Maker</h1>
      <div id="page">
        <div className="left">
          <GeneralSection
            initialData={defaultGeneralInfo}
            onSave={(data) => setSavedGeneralInfo(data)}
          />

          <section className="formSection">
            <h2>Educational Experiences</h2>
            <form id="educationForm">
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
              <Button text="Save" type="submit" />
            </form>
          </section>
        </div>
        <div className="right">
          <div className="cvRender">
              <div>
                <h2>{savedGeneralInfo.firstName} {savedGeneralInfo.lastName}</h2>
                <p>Geboren: {new Date(savedGeneralInfo.birthDate).toLocaleDateString('de-DE')}</p>
                <p>E-Mail: {savedGeneralInfo.email} | Tel: {savedGeneralInfo.phone}</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
