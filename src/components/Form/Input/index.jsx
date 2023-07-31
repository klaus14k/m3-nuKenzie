import "./styles.scss"

export const Input = ({ label, id, type, placeholder }) => {
    return (
        <div className="field">
            <label className="title3" htmlFor={id}>{label}</label>
            <input
            className="headline" 
            placeholder={placeholder}
            type={type}
            name={id}
            id={id}
            />
        </div>
    )
}