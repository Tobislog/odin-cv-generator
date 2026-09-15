import { useState } from 'react';
import TextInput from './TextInput.jsx';
import Button from './Button.jsx';

function GeneralSection ({ initialData, onSave}) {

    const [draft, setDraft] = useState(initialData);

    const [isSaved, setIsSaved] = useState(false);

    const handleChange = (field, value) => {
        setDraft(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSaved) {
            setIsSaved(false);
        } else {
            onSave(draft);
            setIsSaved(true);
        }
    };

    return (
        <section className="formSection">
            <h2>General Information</h2>
            <form id="generalForm" onSubmit={handleSubmit}>
                <TextInput 
                    label="Vorname" 
                    value={draft.firstName} 
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    disabled={isSaved}
                />
                <TextInput 
                    label="Nachname"
                    value={draft.lastName} 
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    disabled={isSaved}
                />
                <TextInput 
                    label="Geburtsdatum" 
                    type="date"
                    value={draft.birthDate} 
                    onChange={(e) => handleChange('birthDate', e.target.value)}
                    disabled={isSaved}
                />
                <TextInput 
                    label="E-Mail" 
                    type="email"
                    value={draft.email} 
                    onChange={(e) => handleChange('email', e.target.value)}
                    disabled={isSaved}
                />
                <TextInput 
                    label="Phone" 
                    type="tel"
                    value={draft.phone} 
                    onChange={(e) => handleChange('phone', e.target.value)}
                    disabled={isSaved}
                />
                <Button text={isSaved ? "Edit" : "Save"} type="submit"/>
            </form>
        </section>
    )
}

export default GeneralSection;
