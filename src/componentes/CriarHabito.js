import { useEffect, useContext, useState} from "react"
import axios from 'axios'
import styled from 'styled-components'
import UserContext from "./contexts/UserContext"

export default function CriarHabito(){

    const {dados} = useContext(UserContext)    
    const token = dados.token
    const [selecionado, setSelecionado] = useState(false)
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [habito, setHabito] = useState({
        name: '',
        days: []
    })

    function Tela(event){
        
    }

    function MudancaDoInput(e){
        setHabito({
            ...habito,
            [e.target.name]: e.target.value,
          }) 
        
    }

    function AdicionarDia(id){
        setSelecionado (! selecionado)
        {(habito.days.includes(id))? 
            setHabito({
                ...habito, 
                days : habito.days.filter((d) => d !== id)
            }) :
            setHabito({
                ...habito, 
                days: [...habito.days, id]
            })}       
    
    }

    function AddNovoHabito(event){
        event.preventDefault(); 

        console.log(habito)
        useEffect(() => {
            const config = {
                 headers: {
                     "Authorization" : `Bearer ${token}`
                 }
            }
    
            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habito, config)
            promise.then(console.log("hello"))
            
            
             })        
    }

    return(
        <form onSubmit={AddNovoHabito}>
            
            <CadastraHabito>
                <CaixaDeTexto name="name" type="text" placeholder="nome do hábito" value = {habito.name} onChange={MudancaDoInput} required />
                <DiasDaSemana>
                    {dias.map ((dia, index) => {
                        return (
                            <Dia key = {index} id = {index} dias = {habito.days} onClick = {() => AdicionarDia(index)}>
                                <p>{dia}</p>
                            </Dia>
                        )
                    })}
                </DiasDaSemana>
                <Botoes>
                    <BotaoCancelar>Cancelar</BotaoCancelar>
                    <BotaoSalvar onClick={AddNovoHabito}>Salvar</BotaoSalvar>
                </Botoes>
            </CadastraHabito>
            
        </form>
    )    
}



const CadastraHabito = styled.div`   
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;   
    align-items: center;
`

const CaixaDeTexto = styled.input `
    margin-top: 18px;
    box-sizing: border-box;    
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
        
    ::placeholder{
        color:#DBDBDB;
    }`

const DiasDaSemana = styled.div `
    width: 303px;
    display: flex;
    
    `

const Dia = styled.div `
    display: flex;
    align-items:center;
    justify-content: center;
    margin-right: 4px;
    margin-top: 8px;
    box-sizing: border-box;    
    width: 30px;
    height: 30px;
    background-color: ${({id,dias}) => dias.includes(id)?"rgba(207, 207, 207, 1)" : "rgba(255, 255, 255, 1)" };
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color:${({id,dias}) => (dias.includes(id)? "#FFFFFF" : "#DBDBDB" ) } ;`
    
const Botoes = styled.div `
    width: 303px;
    margin-top: 29px;
    justify-content: flex-end;
    display: flex;`

const BotaoCancelar = styled.button `
    border: none;
    margin-right: 8px;
    width: 84px;
    height: 35px;    
    background: #FFFFFF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;`

const BotaoSalvar = styled.button `
    border: none;
    width: 84px;
    height: 35px;    
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;`
