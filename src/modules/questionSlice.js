import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
		ownerName: "",
		answer1: "",
		answer2: "",
		answer3: "",
		answer4: "",
		answer5: "",
		answer6: "",
		content: "",
	},
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
      setData: (state, { payload }) => {
          const { key, data } = payload;
      state.data = { ...state.data, [key]: data }
    },
  },
})

export const { setData } = questionSlice.actions

export default questionSlice.reducer