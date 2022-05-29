import { useEffect, useContext, useState} from "react"
import axios from 'axios'
import styled from 'styled-components'
import UserContext from "./contexts/UserContext"
import TopoMenu from "./TopoMenu"
import CriarHabito from "./CriarHabito"


export default function TelaHabitos(){
    
    const {dados} = useContext(UserContext)    
    const token = dados.token
    const [escondido, setEscondido] = useState(false)
    
    
    


    

    useEffect(() => {
        const config = {
             headers: {
                 "Authorization" : `Bearer ${token}`
             }
         }

         const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
         promise.then(console.log("ola"))
        
        
         })

    function Tela(event){
        event.preventDefault(); 
    }    
    
    

    return(
        <>        
        <TopoMenu/>
        <Container>  
            <Titulo>
                <span>Meus Hábitos</span>    
                <button onClick = {() => setEscondido(!escondido)}>+</button>
            </Titulo> 
            {(escondido === true)? <CriarHabito/> : <></>}             
            
            <Mensagem>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Mensagem>
            
            
        </Container>        
        </>    
        
    )
}

const Container = styled.div `    
    margin-top: 70px;
    height: 100vh;
    background-color: #E5E5E5;
    display:flex;
    flex-direction: column;
    
    align-items:center;`
    

const Titulo = styled.div `
    width: 340px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:28px 18px;
    
    span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-size: 27px;
        color: #FFFFFF;
    }`

const Mensagem = styled.div `
    margin-top:28px;
    padding: 0 18px;    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    `

