'use client'

import {StyledButton} from '@/Components/Unknown/StyledButton'
import {keyframes, styled, ThemeProvider} from 'styled-components'

const theme = {
  // dark: {
  //   primary: 'red',
  //   secondary: 'blue',
  // },
  // light: {
  //   primary: 'black',
  //   secondary: 'yellow',
  // },
  fontFamily: 'Roboto',
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className="flex min-h-screen flex-col items-center justify-between p-10 w-{400}">
        <div>
          <Box>
            <Text>hello</Text>
          </Box>
        </div>
      </main>
    </ThemeProvider>
  )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);

  }
`

const Box = styled.div`
  text-align: center;
  padding: 50px;
  background-color: purple;
  animation: ${rotate} infinite 10s linear;
`

const Text = styled.p`
  font-size: 24px;
  font-family: ${props => props.theme.fontFamily};
  color: white;
`

// const MainButton = styled(StyledButton).attrs({
//   type: 'button',
// })`
//   color: black;
//   padding: 36px;
// `
