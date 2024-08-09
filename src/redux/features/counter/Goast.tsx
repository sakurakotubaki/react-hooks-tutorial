import { useDispatch, useSelector } from "react-redux"
import { change } from "../goast/goastSlice"
import { RootState } from "../../store/store"
import styled from "styled-components"

const Emoji = styled.p`
    font-size: 25px
`

export const Goast = () => {
  const emoji = useSelector((state: RootState) => state.goast.value)
  const dispatch = useDispatch()

  return (
    <div>
       {emoji ? emoji : <Emoji>誰もいないよ</Emoji>}
        <button onClick={() => dispatch(change())}>Change</button>
    </div>
  )
}

export default Goast