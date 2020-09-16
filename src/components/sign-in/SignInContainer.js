import React, { Component } from 'react'
import styled from 'styled-components'
import { Section } from '../Section'
import Title from '../Title'
import Axios from 'axios'

const Container = styled.div`
  background-color: #29abe2 !important;

  @media (min-width: 1025px) {
    min-height: 743px;
  }
`

const SignInForm = styled(Section)`
  padding-bottom: 20px;
`

const FormTitle = styled(Title)`
  font-family: 'Helvetica 25';
`

const Input = styled.input`
  border: 0;
  outline: 0;
  border-bottom: 2px solid #fff;
  background: transparent;
  display: block;
  width: 100%;
  color: #fff;
  font-family: 'Helvetica Condensed';
  height: 40px;
`

const StyledLabel = styled.label`
  font-size: 0.9em;
  font-family: 'Roboto';
`

const StyledButton = styled.button`
  padding: 10px;
  display: block;
  width: 100%;
  font-family: 'Helvetica 25';
  font-size: 1.2em;
  background-color: #012d51;
  color: #29abe2;
`

class SignInContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
      birthday: '',
    }
  }

  handleChange = (evt) => {
    const {
      target: { name, value },
    } = evt
    this.setState({ [name]: value })
  }

  handleSubmit = async () => {
    const response = await Axios.post(
      'http://localhost:3001/createUser',
      this.state
    )
    if (response.data) {
      alert('Usuario Criado')
    }
  }

  render() {
    return (
      <Container>
        <FormTitle>CADASTRO</FormTitle>
        <SignInForm>
          <form>
            <StyledLabel htmlFor="nome">
              Nome
              <br />
              <Input type="text" name="name" onChange={this.handleChange} />
            </StyledLabel>
            <br />
            <StyledLabel htmlFor="email">
              E-mail
              <br />
              <Input type="text" name="email" onChange={this.handleChange} />
            </StyledLabel>
            <br />
            <StyledLabel htmlFor="birthday">
              Nascimento
              <br />
              <Input type="text" name="birthday" onChange={this.handleChange} />
            </StyledLabel>
            <br />
            <StyledLabel htmlFor="phone">
              Telefone <br />
              <Input type="text" name="phone" onChange={this.handleChange} />
            </StyledLabel>
          </form>
          <br />
          <StyledButton onClick={this.handleSubmit}>CADASTRAR</StyledButton>
        </SignInForm>
      </Container>
    )
  }
}

export default SignInContainer
