import styled, { css } from 'styled-components'


const Button = styled.button<{ $primary?: boolean; }>`
  background: navy;
  border-radius: 3px;
  border: 2px solid navy;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: background 0.3s, border-color 0.3s;

  &:hover {
    background: lightblue;
    border-color: lightblue;
  }

  ${props =>
    props.$primary &&
    css`
      background: navy;
      color: white;
    `};
`;

// Normal button
const NormalButton = styled(Button)`
  background: white;
  color: navy;
`;


const ButtonStyle = () => {
  return (
    <div>
      <NormalButton>Normal</NormalButton>
      <Button $primary>Primary</Button>
    </div>
  )
}

export default ButtonStyle;