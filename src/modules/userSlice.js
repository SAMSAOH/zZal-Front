import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { kakaoLoginHandler } from '../utils/KakaoLogin';

const initialState = {
	userId: null,
}
export const login = createAsyncThunk(
  'user/login',
  async ({code,redirectUrl}, { rejectWithValue }) => {
    try {
      const { userId } = kakaoLoginHandler(code, redirectUrl);
      return userId;
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      setId: (state, { payload }) => {
          const { userId } = payload;
      state.userId = userId;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      const { userId } = payload;
      state.userId = userId;
    })
  }
})

export const { setId } = userSlice.actions

export default userSlice.reducer