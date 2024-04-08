import {styled} from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: 'space-between';
  margin: 12px 24px;
`

const Title = styled.h2`
  color: 'purple';
  font-size: 36px;
  padding: 24px;
`
const List = styled.ul`
    padding:24px;
    background-color: gray;
    display: flex;
    align-items: 'center
`

const ListItem = styled.li`
  border-radius: 12px;
  text-align: center;
`

export {Container, Title, List, ListItem}
