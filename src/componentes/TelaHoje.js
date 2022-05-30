import { useEffect, useContext, useState} from "react"
import axios from 'axios'
import styled from 'styled-components'
import dayjs from 'dayjs'
import  'dayjs/locale/pt-br'
import UserContext from "./contexts/UserContext"
import TopoMenu from "./TopoMenu"



export default function TelaHoje(){
    
    const {dados} = useContext(UserContext)    
    const token = dados.token
    const [HabitosHoje, setHabitosHoje] = useState([])
    const [HabitosFeitos, setHabitosFeitos] = useState([])
    const [selecionado, setSelecionado] = useState(false)

    function ListarHabitosHoje(){
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        promise.then(res => {
            setHabitosHoje(res.data)
        })

        promise.catch(err => {
            console.log(err)
        })
    }
    

    useEffect(() => {
        ListarHabitosHoje();
    })
    
    function SelecionarHabito(){
        setSelecionado (! selecionado)
    }

    return(
        <Container>
            <TopoMenu/>

            <Titulo>
            <span> {dayjs().locale('pt-br').format('dddd,DD/MM')}</span>

            {HabitosHoje? (
                HabitosFeitos > 0? (
                    <p> % dos hábitos concluídos</p>

                ):(
                    <p>Nenhum hábito concluído ainda</p>
                )
            ):(
                <></>
            )}
            </Titulo>

            
                {HabitosHoje? (
                    HabitosHoje.map((habitos) => (
                        <ContainerHabitos key = {habitos.id}>
                        <ContainerHabito >
                            <h1>{habitos.name}</h1>
                            
                            <p>Sequência atual: </p>
                            <p>Seu recorde: </p>
                                                        
                        </ContainerHabito>
                        
                            <Botao key = {habitos.id} id = {habitos.id} onClick = {() => SelecionarHabito(habitos.id)}>
                                <ion-icon name="checkmark-outline"></ion-icon>
                            </Botao>
                                                
                        </ContainerHabitos>
                    ))
                ): (
                    <Mensagem>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Mensagem>
                )}  
             

        </Container>
        
        
        
    )
}

const Container = styled.div `
    margin: 70px 0;
    height: 100vh;
    background-color: #E5E5E5;
    display:flex;
    flex-direction: column;
    align-items:center;`

const Titulo = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    
    
    padding:28px 18px;
    
    span{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;

        color: #BABABA;

    }`



const ContainerHabitos = styled.div `
    margin-bottom: 10px;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;    
    align-items: center;`

const ContainerHabito = styled.div `

    margin-left: 15px;

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 7px;
    }
    
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;        
        color: #666666;
    }`

const Botao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 13px;
    box-sizing: border-box;    
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    
    ion-icon{
        font-size: 40px;
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


