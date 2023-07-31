import { useState } from "react"
import { Form } from "../Form/index"
import { List } from "../Section/List/index"

export const Section = () => {
    const [list, setList] = useState([])

    const addCard = (formData) => {
        const newCard = {...formData, id: crypto.randomUUID()}
        setList([...list, newCard])
    }

    const removeCard = (removeId) => {
        const newList = list.filter(card => card.id !== removeId)
        setList(newList)
    }

    return (
        <section className="container">
            <Form addCard={addCard} />
            <List list={list} removeCard={removeCard}/>
        </section>
    )
}