import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


// ###########################################
//  fetching thunk
export const userslist = createAsyncThunk(
  'get/getPosts',
  async () => {
    const res = await fetch('https://bushu-mongose.herokuapp.com/employee').then(
    (data) => data.json()
  )
  return res
  })

 
 


// ###########################################

//############################################
 // eslint-disable-next-line

// ###########################################
export const employeeSlice = createSlice({
  name: 'employee',
  initialState: {employees :[] ,loading : true},
  reducers: {
    getemployees: (state)=>{
      //  console.log(state.loading)
        // console.log(state.employees)
      },

    
  
  },
  extraReducers: {
    [userslist.pending]: (state) => {
      state.loading = true
    },
    [userslist.fulfilled]: (state, { payload }) => {
      state.loading = false
      // console.log(payload)
      state.employees = payload
    },
    [userslist.rejected]: (state) => {
      state.loading = false
    },
   

  }
 
})

// Action creators are generated for each case reducer function
export const { getemployees} = employeeSlice.actions;
export const selectUser = (state) => state.reducer.employees;
export const selectLoading=(state) => state.reducer.loading;

export default employeeSlice.reducer;