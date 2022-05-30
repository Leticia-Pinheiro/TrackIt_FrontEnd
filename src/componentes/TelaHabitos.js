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
    const [habitos, setHabitos] = useState([])
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']


        

        useEffect(() => {
            const config = {
                headers: {
                    "Authorization" : `Bearer ${token}`
                }
            }
   
            const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
   
            promise.then(res => {
                setHabitos(...habitos, res.data)
            })
            
            promise.catch(err =>{
                console.log(err)
            })
            
        }, [])
    
    

    

     
    
    

    return(
        <>        
        <TopoMenu/>
        <Container>  
            <Titulo>
                <span>Meus Hábitos</span>    
                <button onClick = {() => setEscondido(!escondido)}>+</button>
            </Titulo> 
            {(escondido === true)? <CriarHabito/> : <></>}   

            {habitos? (
                habitos.map((habitos) => (
                    <ContainerHabito key = {habitos.id}>
                        <NomeHabito>{habitos.name}</NomeHabito>
                        <DiasDaSemana>
                            {dias.map((dia, index) => {
                                return(
                                    <Dia key={index} id={index} dias={habitos.days}>
                                        <p>{dia}</p>
                                    </Dia>
                                )
                            })}
                        </DiasDaSemana>
                        {/* botaoDeletar */}
                    </ContainerHabito>
                ))
            ): (
                <Mensagem>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Mensagem>
            )}   
                
            
            
            
            
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

const ContainerHabito = styled.div`   
    margin-bottom: 10px;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;   
    align-items: center;
`

const NomeHabito = styled.p `  
    margin-top: 13px;         
    width: 303px;
    height: 45px;    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;      
    color:##DBDBDB;`

const DiasDaSemana = styled.div `
    width: 303px;
    display: flex;
    margin-top: 8px;
    margin-bottom: 15px;
    `

const Dia = styled.div `
    display: flex;
    align-items:center;
    justify-content: center;
    margin-right: 4px;
    
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