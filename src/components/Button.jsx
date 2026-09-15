export default function Button ({
    text = "Click Me!",
    ...rest
}) {
    return (
        <button>{text}</button>
    )
}
