import { ListCard } from "./ListCard/index"
import "./styles.scss"

export const List = ({ list, removeCard }) => {
    if (list.lenght === 0) {
        return (<h2 className="title2">Você ainda não possui nenhum lançamento</h2>)
    }
    else {
        return (
            <div className="divList">
                <h2 className="title3">Resumo financeiro</h2>
                <ul>
                    {list.map(card => (
                        <ListCard key={card.id} id={card.id} description={card.description} type={card.type} price={card.price} removeCard={removeCard} />
                    ))}
                </ul>
            </div>
        )
    }
}