import React from 'react'
import styled from "styled-components"


export default function TelaLogin(){
    return( 
        <Container>
            <Foto src = "imagens/TrackIt.png" alt = "logo"/>
            <CaixaDeTexto type="text" placeholder="email" />
            <CaixaDeTexto type="text" placeholder="senha" />
            <Entrar>Entrar</Entrar>
            <span>Não tem uma conta? Cadastre-se!</span>
        </Container>       
        
    )
}

const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
    
    input {    
        
    }
    
    span{
        margin-top:22px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }`

    const CaixaDeTexto = styled.input `
        margin: 3px;
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
        color: #DBDBDB;
        
    `
    const Entrar = styled.button `
        margin:3px;
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 5px;
        font-family:'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;`

    const Foto = styled.img `
        margin: 60px 0;
        height: 180px;
        width: auto;`