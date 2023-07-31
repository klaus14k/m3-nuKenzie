import "../Input/styles.scss"

export const Select = () => {
    return (
        <div className="field">
            <label className="title3">Tipo de Valor</label>
            <select>
                <option className="headline" value="Entrada">Entrada</option>
                <option className="headline" value="Despesa">Despesa</option>
            </select>
        </div>
    )
}