import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
body {
  background-color: palegreen
}
`
const Secao = styled.section`
width: 50%;
display: flex;
flex-direction: column;
margin-left: 19rem;
margin-top: 10rem;
text-align: center;
border: solid black;
background-color: aquamarine;
`
const Title = styled.h1`
color: blue;
font-size: 4rem;
`
const Divisao = styled.div`

display: flex;
justify-content: center;
justify-content: space-evenly;
`
const Botao = styled.button`
width: 9vw;
height: 8vh;
border-radius: 20vh;
font-size: 2rem;
background-color: blue;
`
class App extends Component {
  state = {
    numero: 0 
  }
  adicionar = () => {
    if(this.state.numero < 10){
      this.setState({
        numero: this.state.numero + 1
      })
    }
  }
  remover = () => {
    if(this.state.numero > 0){
      this.setState({
        numero: this.state.numero - 1
      })
    }
  }
  render() {
    return(
      <>
      <GlobalStyle paleGreenColor />
      <Secao>
      <Title>{this.state.numero} </Title>
      <Divisao>
<Botao onClick={this.adicionar}> + </Botao>
<Botao onClick={this.remover}> - </Botao>
</Divisao>
</Secao>
      </>
    )
  }
}
export default App