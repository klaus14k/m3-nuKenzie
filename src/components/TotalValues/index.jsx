import "./styles.scss"

export const TotalValues = ({ list, sum }) => {
    return (
        list.length > 0 ? (
            <div className="balance">
                <div>
                    <h3 className="title3">Valor Total:</h3>
                    <p className="body">O valor se refere ao saldo</p>
                </div>
                <span className="title3">{`R$ ${sum}`}</span>
            </div>
        )
        : (null)
    )
}