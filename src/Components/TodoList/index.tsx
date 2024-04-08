import React from 'react'
import {Container, Title, List, ListItem} from './styles'
import {StyledButton} from '../Unknown/StyledButton'

const Todo = () => {
  return (
    <Container>
      <Title>Toto Title</Title>
      <List>
        <ListItem key={'asd'}>List item </ListItem>
        <ListItem>List item </ListItem>
        <ListItem>List item </ListItem>
        <ListItem>List item </ListItem>
      </List>
      <StyledButton variant="outlined">Some text</StyledButton>
    </Container>
  )
}

export default Todo
