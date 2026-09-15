import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput.jsx';
import Button from './components/Button.jsx';
import GeneralSection from './components/GeneralSection.jsx';
import EducationSection from './components/EducationSection.jsx';

const defaultGeneralInfo = {
  firstName: 'Your',
  lastName: 'Name',
  birthDate: '1990-01-01',
  email: 'yourmail@yourprovider.com',
  phone: '0123 4567890'
};

const defaultEducationInfo = [{
  id: '1',
  school: 'Muster-Universität',
  title: 'B.Sc. Informatik',
  startDate: '2019-10-01',
  endDate: '2023-09-30'
}];

function App() {

  // Finaler Sate für CV, wird bei Klick auf Save gefüllt.
  const [savedGeneralInfo, setSavedGeneralInfo] = useState(defaultGeneralInfo);
  const [savedEducatonInfo, setSavedEducationInfo] = useState(defaultEducationInfo);

  return (
    
    <>
      <h1>React CV-Maker</h1>
      <div id="page">
        <div className="left">
          <GeneralSection
            initialData={defaultGeneralInfo}
            onSave={(data) => setSavedGeneralInfo(data)}
          />
          <EducationSection
            initialData={defaultEducationInfo}
            onSave={(data) => setSavedEducationInfo(data)}
          />
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

              <hr className="renderSectionDivider"/>

              <div>
                <h3>Ausbildung</h3>
                {savedEducatonInfo.map(edu => (
                  <div key={edu.id}>
                    <strong>{edu.title}</strong> - {edu.school}
                    <p>
                      {new Date(edu.startDate).toLocaleDateString('de-DE')} bis {new Date(edu.endDate).toLocaleDateString('de-DE')}
                    </p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
