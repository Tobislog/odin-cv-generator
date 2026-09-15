import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput.jsx';
import Button from './components/Button.jsx';

const defaultGeneralInfo = {
  firstName: 'Your',
  lastName: 'Name',
  birthDate: '1990-01-01',
  email: 'yourmail@yourprovider.com',
  phone: '0123 4567890'
};

function App() {
  // State für die Daten General
  const [draftGeneralInfo, setDraftGeneralInfo] = useState(defaultGeneralInfo);

  // Finaler Sate für CV, wird bei Klick auf Save gefüllt.
  const [savedGeneralInfo, setSavedGeneralInfo] = useState(defaultGeneralInfo);

  // State für Status
  const [isGeneralSaved, setIsGeneralSaved] = useState(false);

  const handleChange = (field, value) => {
    setDraftGeneralInfo(prev => ({
      ...prev,
      [field]: value
    }));
  }

  const handleSaveOrEdit = (e) => {
    e.preventDefault();
    if (isGeneralSaved) {
      setIsGeneralSaved(false);
    } else {
    setSavedGeneralInfo(draftGeneralInfo);
    setIsGeneralSaved(true)
    }
  };

  return (
    
    <>
      <h1>React CV-Maker</h1>
      <div id="page">
        <div className="left">
          <section className="formSection">
            <h2>General Information</h2>
            <form id="generalForm" onSubmit={handleSaveOrEdit}>
              <TextInput 
                label="Vorname" 
                value={draftGeneralInfo.firstName} 
                onChange={(e) => handleChange('firstName', e.target.value)}
                disabled={isGeneralSaved}
              />
              <TextInput 
                label="Nachname"
                value={draftGeneralInfo.lastName} 
                onChange={(e) => handleChange('lastName', e.target.value)}
                disabled={isGeneralSaved}
              />
              <TextInput 
                label="Geburtsdatum" 
                type="date"
                value={draftGeneralInfo.birthDate} 
                onChange={(e) => handleChange('birthDate', e.target.value)}
                disabled={isGeneralSaved}
              />
              <TextInput 
                label="E-Mail" 
                type="email"
                value={draftGeneralInfo.email} 
                onChange={(e) => handleChange('email', e.target.value)}
                disabled={isGeneralSaved}
              />
              <TextInput 
                label="Phone" 
                type="tel"
                value={draftGeneralInfo.phone} 
                onChange={(e) => handleChange('phone', e.target.value)}
                disabled={isGeneralSaved}
              />
              <Button text={isGeneralSaved ? "Edit" : "Save"} type="submit"/>
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
