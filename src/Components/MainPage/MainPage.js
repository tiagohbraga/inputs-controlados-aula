import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")




  const onChangeNome = (event) => {
    console.log("Mudei o input Nome")
    console.log(event.target.value)
    setNome(event.target.value)
  }
  const onChangeIdade = (event) => {
    console.log("Mudei o input Idade")
    console.log(event.target.value)
    setIdade(event.target.value)
  }
  const onChangeEmail = (event) => {
    console.log("Mudei o input Email")
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  const limparInput = () => {
    console.log(`
      Nome: ${nome}
      Idade: ${idade}
      Email: ${email}
    `)
    setNome ("")
    setIdade ("")
    setEmail ("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label >
          Nome:
          <Input onChange={onChangeNome} value={nome} />
          <p>{nome}</p>
        </label>
        <label>
          Idade:
          <Input type='number' onChange={onChangeIdade} value={idade} />
          <p>{idade}</p>
        </label>
        <label>
          E-mail:
          <Input onChange={onChangeEmail} value={email} />
          <p>{email}</p>
        </label>
        <button onClick={limparInput}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage