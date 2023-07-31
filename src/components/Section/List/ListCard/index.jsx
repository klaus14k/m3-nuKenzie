import "./styles.scss"

export const ListCard = ({ description, type, price, removeCard, id }) => {
    return (
        <li>
            <div>
                <h3 className="title3">{description}</h3>
                <p className="body">{type}</p>
            </div>
            <div>
                <p className="body">{price}</p>
                <button onClick={() => removeCard(id)}>Excluir</button>
            </div>
        </li>
    )
}