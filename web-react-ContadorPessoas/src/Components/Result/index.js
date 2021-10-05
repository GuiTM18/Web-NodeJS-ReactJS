import { useState } from "react"


export default function Result() {

    const [contador, setContador] = useState(0)

    function adicionar() {
        setContador(contador + 1)
    }

    function remover() {
        setContador(contador - 1)
        if (contador <= 0) {
            alert('Número de pessoas inválido! Clique no botão de + para adicionar pessoas')
            setContador(contador + 1)
        }
    }

    return (
        <div>
            <div className="div">
                {contador}
            </div>
            <div className="button">
                <button className="more" onClick={adicionar}>+</button> <br/> 
                <button className="less" onClick={remover}>-</button>
            </div>

        </div>

    )
}