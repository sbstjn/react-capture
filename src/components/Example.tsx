import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: #2874a6;
  box-sizing: border-box;
  padding: 10px;
`

const Headline = styled.h1`
  font-family: 'Open Sans Condensed', sans-serif;
  color: white;
  font-weight: 700;
  margin-bottom: 10px;
`

const Content = styled.div`
  font-size: 54px;
`

export const Example = () => {
  return (
    <Wrapper>
      <Headline>react-capture</Headline>
      <Content>
        <span role="img" aria-label="Camera">
          📸
        </span>
      </Content>
    </Wrapper>
  )
}
