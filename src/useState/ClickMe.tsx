import { useState } from "react"
import styled from "styled-components"

const Goast = styled.h1`
    font-size: 1.5em;
`

const ClickMe = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(prevShow => !prevShow);
  }

  return (
    <div>
        { show ? <Goast>👻</Goast> : <p>お化けいないよ</p> }
        {
            show ?
            <button onClick={() => handleClick()}>お化けでた笑</button>
            :
            <button onClick={() => handleClick()}>クリックしてね</button>
        }
    </div>
  )
}

export default ClickMe