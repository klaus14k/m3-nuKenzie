import { useState } from "react"
import { Input } from "./Input/index"
import { Select } from "./Select/index"
import "./styles.scss"

export const Form = ({ addCard }) => {
    const [description, setDescription] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState("")

    const submit = (event) => {
        event.preventDefault()
        addCard({ description, type, price })
        setDescription("")
        setType("")
        setPrice("")
    } 

    return (
        <form onSubmit={submit}>
            <Input label="Descrição" type="text" placeholder="Digite aqui sua descrição" id="descr_input" value={description} onSubmit={(event) => setDescription(event.target.value)} />

            <p className="body">Ex: Compra de roupas</p>

            <Input label="Valor (R$)" type="number" placeholder="1" id="amount_input" value={price} onSubmit={(event) => setPrice(event.target.value)} />

            <Select value={type} onSubmit={(event) => setType(event.target.value)} />

            <button>Inserir Valor</button>
        </form>
    )
}