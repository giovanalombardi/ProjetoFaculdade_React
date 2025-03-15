import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`

function StyledProduto(props) {
  return (
    <Container>
      <h2>{props.nome}</h2>
      <p>Preço: R$ {props.preco}</p>
    </Container>
  )
}
export default StyledProduto
