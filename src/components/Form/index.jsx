import { useState } from "react"
import { Input } from "./Input/index"
import { Select } from "./Select/index"
import "./styles.scss"

export const Form = ({ addCard }) => {
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [type, setType] = useState("")

    const submit = (event) => {
        event.preventDefault()
        addCard({ description, type, price })
        setDescription("")
        setPrice("")
        setType("")
    } 

    return (
        <form onSubmit={submit}>
            <Input label="Descrição" type="text" placeholder="Digite aqui sua descrição" id="descr_input" value={description} setValue={setDescription} />

            <p className="body">Ex: Compra de roupas</p>

            <Input label="Valor (R$)" type="number" placeholder="1" id="amount_input" value={price} setValue={setPrice} />

            <Select value={type} setValue={setType} />

            <button>Inserir Valor</button>
        </form>
    )
}