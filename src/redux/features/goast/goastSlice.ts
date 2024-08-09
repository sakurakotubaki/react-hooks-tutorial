import { createSlice } from '@reduxjs/toolkit'

export interface GoastState {
  value: string
}

const initialState: GoastState = {
  value: '',
}

export const goastSlice = createSlice({
  name: 'goast',
  initialState,
  reducers: {
    // クリックしたら、emojiをtoggleする
    // 例: true -> 👻, false -> 誰もいないよ
    change: (state) => {
      state.value = state.value === '' ? '👻' : ''
    },
  },
})

export const { change } = goastSlice.actions

export default goastSlice.reducer