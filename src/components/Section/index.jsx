import { useState } from "react"
import { Form } from "../Form/index"
import { List } from "../Section/List/index"
import { TotalValues } from "../TotalValues/index"

export const Section = () => {
    const [list, setList] = useState([])
    const sum = (list.reduce((prevValue, card) => {
        if (card.type == "Entrada"){
            return prevValue + parseFloat(card.price)
        }
        return prevValue - parseFloat(card.price)
    } , 0))

    const addCard = (formData) => {
        const newCard = {...formData, id: crypto.randomUUID()}
        setList([...list, newCard])
    }
    

    const removeCard = (removeId) => {
        const newList = list.filter(card => card.id !== removeId)
        setList(newList)
    }

    return (
        <>
            <section className="container">
                <Form addCard={addCard} />
                <List list={list} removeCard={removeCard}/>
            </section>
            <TotalValues list={list} sum={sum}/>
        </>
    )
}