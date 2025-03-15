import React from 'react'
import styled from 'styled-components'
import logo from './imagens/logo1.png'

const Container = styled.div`
  text-align: center;
`

const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 20px;
`

const Conteudo = styled.main`
  height: 500px;
  background: linear-gradient(to right, #a3a3ff, #0000ff);
`

function App() {
  return (
    <Container>
      <Cabecalho>
        <img src={logo} alt="Logo Impacta" width={150} />
        <h1>Faculdade</h1>
        <nav>
          <a href="#">Texto 01</a>
          <a href="#">Texto 02</a>
          <a href="#">Texto 03</a>
        </nav>
      </Cabecalho>
      <Conteudo />
    </Container>
  )
}

export default App
