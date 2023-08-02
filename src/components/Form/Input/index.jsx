import "./styles.scss"

export const Input = ({ label, id, type, placeholder, setValue, value }) => {
    return (
        <div className="field">
            <label className="title3" htmlFor={id}>{label}</label>
            <input
            className="headline" 
            placeholder={placeholder}
            type={type}
            name={id}
            id={id}
            onChange={(event) => setValue(event.target.value)}
            value={value}
            required
            />
        </div>
    )
}