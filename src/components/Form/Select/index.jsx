import "../Input/styles.scss"

export const Select = ({ value, setValue }) => {
    return (
        <div className="field">
            <label className="title3">Tipo de Valor</label>
            <select value={value} required onChange={(event) => setValue(event.target.value)}>
                <option value={""} disabled>Selecione um tipo</option>
                <option className="headline" value={"Entrada"}>Entrada</option>
                <option className="headline" value={"Despesa"}>Despesa</option>
            </select>
        </div>
    )
}