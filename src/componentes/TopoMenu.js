import { useEffect, useContext} from "react"
import axios from 'axios'
import styled from 'styled-components'
import UserContext from "./contexts/UserContext"
import { Link } from "react-router-dom"

import "react-circular-progressbar/dist/styles.css";


export default function TopoMenu(){
    
    const {dados} = useContext(UserContext)
    const foto = dados.image
    const token = dados.token

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
            <Cabecalho>
                <span>TrackIt</span>
                <img src = {foto} alt = "foto-do-usuario"/>

            </Cabecalho>

            <Menu>
                <Link to = "/habitos" style={{ textDecoration: 'none' }} ><span>Hábitos</span></Link>                
                <Link to = "/hoje" style={{ textDecoration: 'none' }} ><span>Hoje</span></Link>
                <Link to = "/historico" style={{ textDecoration: 'none' }} ><span>Histórico</span></Link>              
                
            </Menu>
        </Container>
    )
}

const Container = styled.div `
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;`

const Cabecalho = styled.div `
        width: 100%;
        height: 70px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        background-color: #126BA5;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        position: fixed;
        top:0;
        
        span{
            margin-left:18px;
            font-size: 39px;
            color: #FFFFFF;
            font-family: 'Playball'
            
        }
        
        img{
            width: 51px;
            height: 51px;            
            border-radius: 98.5px;
            margin-right: 18px;
        }`

const Menu = styled.div `
        width: 100%;
        height: 70px;
        display:flex;
        align-items: center;
        justify-content: space-around;
        background-color: #FFFFFF;        
        position: fixed;
        bottom:0;

        span{
            
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            color: #52B6FF;
            
            ::link{
                text-decoration: none;
            }
        }
`