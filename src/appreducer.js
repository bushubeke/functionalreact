import { createSlice } from '@reduxjs/toolkit'
const axios = require('axios');
export const userReducer = createSlice({
  name: 'useradminflow',
  initialState: {
    employees :[] ,

  },
  reducers: {
    getemployees: (state) => {
      
     
      console.log("this path is working fine")
      axios({
        method: 'get',
        headers: { 
          
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        
        url: 'https://bushu-mongose.herokuapp.com/employee',
              })
        .then(function (response) {
          console.log(response.data)
          state.employees=response.data;
          // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        });
        // axios.get('https://bushu-mongose.herokuapp.com/employee')
        //     .then(function (response) {
        //       // handle success
        //       console.log(response);
        //     })
        //     .catch(function (error) {
        //       // handle error
        //       console.log(error);
        //     })
        //     .then(function () {
        //       // always executed
        //     });
    },
    updateemployees: (state) => {
      
      state.loggedin=false;
      console.log("this path is working fine")
    },
    deleteemployees: (state) => {
      
      state.loggedin=false;
      console.log("this path is working fine")
    },
    createemployees: (state) => {
      
      state.loggedin=false;
      console.log("this path is working fine")
    }
  
  },
})

// Action creators are generated for each case reducer function
export const { getemployees,updateemployees,deleteemployees,createemployees } = userReducer.actions;
export const selectUser = (state) => state.reducer.employees;
export default userReducer.reducer