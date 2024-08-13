import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
    width: 300px;
    max-width: 100%;
    padding: 20px 10px;
    background-color: #e25c00;
    border: 2px solid transparent;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 16);
    color: #fff;
    font-size: 1.125rem,;
    text-align: center;
    text-decoration: none;
    transform: 25s;

    &:hover {
        background-color: #ff6a00;
    }
}
`

interface ButtonProps {
  onClick: () => void;
  title: string;
}

const ButtonComponent = ({ onClick, title }: ButtonProps) => {

  return (
    <div>
        <Button onClick={onClick}>{title}</Button>
    </div>
  )
}

export default ButtonComponent