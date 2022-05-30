import { useEffect, useContext, useState} from "react"
import axios from 'axios'
import styled from 'styled-components'
import UserContext from "./contexts/UserContext"

import TopoMenu from "./TopoMenu"


export default function TelaHoje(){
    
    const {dados} = useContext(UserContext)    
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
            <TopoMenu/>

            

            
            
            <h1>TELA Hoje</h1>
        </Container>
        
        
        
    )
}

const Container = styled.div `
    margin-top: 70px;
    height: 100vh;
    background-color: #E5E5E5;`