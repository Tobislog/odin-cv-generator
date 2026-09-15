import './TextInput.css'

function TextInput (props) {

    return (
        <div className="TextInputGroup">
            <label htmlFor={props.id}>{props.name}</label>
            <input id = {props.id} name={props.name}/>
        </div>
    )
}

export default TextInput;
