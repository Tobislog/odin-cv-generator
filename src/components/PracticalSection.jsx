import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import '../styles/PracticalSection.css';

function PracticalItem ({item, onChange, onDelete, disabled}) {
    return (
        <div className="practicalItem">
            <TextInput
                label="Company Name"
                value={item.company}
                onChange={(e) => onChange(item.id, 'company', e.target.value)}
                disabled={disabled}
            />
            <TextInput
                label="Role"
                value={item.role}
                onChange={(e) => onChange(item.id, 'role', e.target.value)}
                disabled={disabled}
            />
            <TextInput
                label="Responsibilities"
                value={item.responsibilities}
                onChange={(e) => onChange(item.id, 'responsibilities', e.target.value)}
                disabled={disabled}
            />
            <TextInput
                label="Beginn"
                value={item.startDate}
                onChange={(e) => onChange(item.id, 'startDate', e.target.value)}
                disabled={disabled}
            />
            <TextInput
                label="Ende"
                value={item.endDate}
                onChange={(e) => onChange(item.id, 'endDate', e.target.value)}
                disabled={disabled}
            />
            {!disabled && (
                <button type="button" onClick={() => onDelete(item.id)}>
                    Löschen
                </button>
            )}
        </div>
    )
}

function PracticalSection ({initialData, onSave}) {
    const [draftList, setDraftList] = useState(initialData);
    const [isSaved, setIsSaved] = useState(false);

    const handleChange = (id, field, value) => {
        setDraftList(prev =>
            prev.map(item => (item.id === id ? {...item, [field]: value} : item))
        );
    };

    const handleAdd = () => {
        const newItem = {
            id: crypto.randomUUID(),
            company: '',
            role: '',
            responsibilities: '',
            startDate: '',
            endDate: ''
        };
        setDraftList(prev => [...prev, newItem]);
    };

    const handleDelete = (id) => {
        setDraftList(prev => prev.filter(item => item.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSaved) {
            setIsSaved(false);
        } else {
            onSave(draftList);
            setIsSaved(true)
        }
    };

    return (
        <section className="formSection">
            <h2>
                Practical Experiences
                {!isSaved && (
                    <button type="button" onClick={handleAdd} id="addPracButton">
                        +
                    </button>
                )}
            </h2>
            <form onSubmit={handleSubmit}>
                {draftList.map(item => (
                    <PracticalItem
                        key={item.id}
                        item={item}
                        onChange={handleChange}
                        onDelete={handleDelete}
                        disabled={isSaved}
                    />
                ))}

                <Button text={isSaved ? "Edit" : "Save"} type="submit" />
            </form>
        </section>
    )
}



export default PracticalSection;
