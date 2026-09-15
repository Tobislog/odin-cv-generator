import '../styles/Button.css';

export default function Button ({
    text = "Click Me!",
    onClick,
    ...rest
}) {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
