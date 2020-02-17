import React, { Fragment, useCallback, useRef } from 'react'
import { render } from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import { useCapture } from './capture'
import { Example } from './components/Example'

const Wrapper = styled.div`
  text-align: center;
`

const Headline = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: 700;
`

const Subline = styled.p`
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
`

const ComponentWrapper = styled.div`
  width: 320px;
  height: 180px;
  margin: 0 auto 20px auto;
`

const Button = styled.input.attrs({ type: 'button' })``

const Globals = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700|Rubik&display=swap');

  html, body {
    width: 100%;
    height: 100%;
  }
`

const App = () => {
  const { snap } = useCapture()
  const element = useRef(null)

  const onClick = useCallback(() => {
    snap(element, { file: 'download.png' })
  }, [snap, element])

  return (
    <Fragment>
      <Globals />

      <Wrapper>
        <Headline>react-capture</Headline>
        <Subline>Capture a React component and download as PNG image.</Subline>

        <ComponentWrapper ref={element}>
          <Example />
        </ComponentWrapper>

        <Button onClick={onClick} value="Download" />
      </Wrapper>
    </Fragment>
  )
}

render(<App />, document.getElementById('root'))
