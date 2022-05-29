// import { useEffect, useContext} from "react"
// import axios from 'axios'
import styled from 'styled-components'
// import UserContext from "./contexts/UserContext"
import TopoMenu from "./TopoMenu"


export default function TelaHistorico(){
    
    // const {dados} = useContext(UserContext)    
    // const token = dados.token

    // useEffect(() => {
    //     const config = {
    //         headers: {
    //             "Authorization": `Bearer ${token}`
    //         }
    //     }

    //     const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
    //     promise.then(console.log(token))
    // })
    

    return(
        <Container>
            <TopoMenu/>
            <Titulo>
                <span>Histórico</span>                  
            </Titulo>                        
            
            <Mensagem>Em breve você poderá ver o histórico dos seus hábitos aqui!</Mensagem>
            
            
        </Container>
        
        
        
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