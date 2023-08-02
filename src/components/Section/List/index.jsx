import { ListCard } from "./ListCard/index"
import "./styles.scss"

export const List = ({ list, removeCard }) => {
    return (
        <>
            {
                list.length > 0 ? (
                    <div className="divList">
                        <h2 className="title3">Resumo financeiro</h2>
                        <ul>
                            {list.map(card => (
                                <ListCard key={card.id} id={card.id} description={card.description} type={card.type} price={card.price} removeCard={removeCard} />
                            ))}
                        </ul>
                    </div>)
                : (
                    <div className="divList">
                        <h2 className="title3">Resumo financeiro</h2>
                        <h2 className="title2">Você ainda não possui nenhum lançamento</h2>
                    </div>
                )
            }
        </>
    )
}