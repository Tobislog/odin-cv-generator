import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput.jsx';
import Button from './components/Button.jsx';
import GeneralSection from './components/GeneralSection.jsx';
import EducationSection from './components/EducationSection.jsx';
import PracticalSection from './components/PracticalSection.jsx';

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

const defaultPracticalInfo = [{
  id: '1',
  company: 'Apple',
  role: 'Software Developer',
  responsibilities: 'Front-End',
  startDate: '1990-10-01',
  endDate: '2026-01-01'
}];

function App() {

  // Finaler Sate für CV, wird bei Klick auf Save gefüllt.
  const [savedGeneralInfo, setSavedGeneralInfo] = useState(defaultGeneralInfo);
  const [savedEducatonInfo, setSavedEducationInfo] = useState(defaultEducationInfo);
  const [savedPracticalInfo, setSavedPracticalInfo] = useState(defaultPracticalInfo);

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
          <PracticalSection
            initialData={defaultPracticalInfo}
            onSave={(data) => setSavedPracticalInfo(data)}
          />
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

              <div>
                <h3>Praxiserfahrung</h3>
                {savedPracticalInfo.map(prac => (
                  <div key={prac.id}>
                    <strong>{prac.role}</strong> - {prac.company}
                    <p>{prac.responsibilities}</p>
                    <p>
                      {new Date(prac.startDate).toLocaleDateString('de-DE')} bis {new Date(prac.endDate).toLocaleDateString('de-DE')}
                    </p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
      <footer>© 2026 Tobias Rau</footer>
    </>
  )
}

export default App
