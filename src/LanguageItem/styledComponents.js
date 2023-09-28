import styled from 'styled-components'

export const LanguageButton = styled.button`
  border: 2px solid #db1c48;
  font-family: 'Roboto';
  color: ${props => props.textColor};
  font-size: 16px;
  background-color: ${props => props.color};
  border-radius: 10px;
  margin: 10px;
  width: 100px;
  height: 40px;
  cursor: pointer;
`
