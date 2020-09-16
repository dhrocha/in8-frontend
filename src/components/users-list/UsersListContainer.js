import React, { Component } from 'react'
import styled from 'styled-components'
import { Section } from '../Section'
import Title from '../Title'
import { MobileOnlyView, TabletView, BrowserView } from 'react-device-detect'
import TabsContainer from '../tabs/TabsContainer'
import Axios from 'axios'

const UsersList = styled(Section)`
  min-height: 607px;
`

const TableUsers = styled.table`
  width: 100%;
  border-style: hidden;
  border-collapse: collapse;
  margin: 0 auto;
`

const TableUsersTd = styled.td`
  border: 1px solid black;
  padding: 0.5rem;
  color: #808080;
  text-align: center;
  font-family: 'Helvetica Condensed';
`

const TableUsersTh = styled(TableUsersTd)`
  color: #012d51;
  font-family: 'Roboto';
`

const ListTitle = styled(Title)`
  color: #29abe2;
  font-family: 'Helvetica 25';
`

class UsersListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
    }
  }

  async componentDidMount() {
    await this.loadData()
  }

  async loadData() {
    await Axios.get('http://localhost:3001/users').then((response) =>
      this.setState({ users: response.data.rows })
    )
  }

  render() {
    return (
      <UsersList>
        <ListTitle>LISTA DE CADASTRO</ListTitle>
        <MobileOnlyView>
          <TabsContainer>
            {this.state.users.map((user) => {
              return (
                <div label={user.id}>
                  Nome: {user.name}
                  <br />
                  <hr style={{ color: '#808080' }} />
                  Email: {user.email}
                  <br />
                  <hr style={{ color: '#808080' }} />
                  Telefone: {user.phone}
                  <br />
                  <hr style={{ color: '#808080' }} />
                  Nascimento: {user.birthday}
                  <br />
                  <hr style={{ color: '#808080' }} />
                </div>
              )
            })}
          </TabsContainer>
        </MobileOnlyView>
        <TabletView>
          <div></div>
        </TabletView>
        <BrowserView>
          <TableUsers>
            <thead>
              <tr>
                <TableUsersTh></TableUsersTh>
                <TableUsersTh>NOME</TableUsersTh>
                <TableUsersTh>EMAIL</TableUsersTh>
                <TableUsersTh>NASCIMENTO</TableUsersTh>
                <TableUsersTh>TELEFONE</TableUsersTh>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user, index) => {
                return (
                  <tr key={'user_' + user.id}>
                    <TableUsersTd>{index + 1}</TableUsersTd>
                    <TableUsersTd>{user.name}</TableUsersTd>
                    <TableUsersTd>{user.email}</TableUsersTd>
                    <TableUsersTd>{user.birthday}</TableUsersTd>
                    <TableUsersTd>{user.phone}</TableUsersTd>
                  </tr>
                )
              })}
            </tbody>
          </TableUsers>
        </BrowserView>
      </UsersList>
    )
  }
}

export default UsersListContainer
