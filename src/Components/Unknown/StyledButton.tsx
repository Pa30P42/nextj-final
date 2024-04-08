import {styled} from 'styled-components'

interface Props {
  variant: 'outlined' | 'default'
}

export const StyledButton = styled.button<Props>`
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  background-color: ${props =>
    props.variant === 'outlined' ? 'white' : 'red'};
  border: ${props => (props.variant === 'outlined' ? '2px solid red' : 'none')};
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  padding: 16px 32px;
  border-radius: 8px;
  color: ${props => (props.variant === 'outlined' ? 'red' : 'white')};
  &:hover {
    background-color: blue;
  }
`

// const PrimaryButton = styled(StyledButton)`
//   padding: 48px;
//   background-color: 'purple';
// `

// background-image: linear-gradient(
//     92.88deg,
//     #455eb5 9.16%,
//     #5643cc 43.89%,
//     #673fd7 64.72%
//   );
