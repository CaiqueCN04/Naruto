import {} from 'react'
import Imagem from'./assets/naruto1.png'
import './Cabecalho.css'

function Cabecalho(){

    const aluno= "Caique";
    const curso="Engenharia";
    return(

        <>
        <h1>Cabeçalho</h1>
        <p>{aluno}</p>
        <p>{curso}</p>
        <img src={Imagem} title='naruto'/>
        </>
    )
}

export default Cabecalho