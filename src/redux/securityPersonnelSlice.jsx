// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   currentPersonnel: null,
//   error: null,
//   loading: false
// };

// const securityPersonnelSlice = createSlice({
//   name: 'securityPersonnel',
//   initialState,
//   reducers: {
//     signInStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     signInSuccess: (state, action) => {
//       state.currentPersonnel = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     signInFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     signOutSuccess: (state) => {
//       state.currentPersonnel = null;
//       state.error = null;
//       state.loading = false;
//     },
//     updatePersonnelStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     updatePersonnelSuccess: (state, action) => {
//       state.currentPersonnel = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     updatePersonnelFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   }
// });

// export const {
//   signInStart,
//   signInSuccess,
//   signInFailure,
//   signOutSuccess,
//   updatePersonnelStart,
//   updatePersonnelSuccess,
//   updatePersonnelFailure,
// } = securityPersonnelSlice.actions;

// export default securityPersonnelSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPersonnel: null,
  error: null,
  loading: false
};

const securityPersonnelSlice = createSlice({
  name: 'securityPersonnel',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentPersonnel = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOutSuccess: (state) => {
      state.currentPersonnel = null;
      state.error = null;
      state.loading = false;
    },
    updatePersonnelStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updatePersonnelSuccess: (state, action) => {
      state.currentPersonnel = action.payload;
      state.loading = false;
      state.error = null;
    },
    updatePersonnelFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  updatePersonnelStart,
  updatePersonnelSuccess,
  updatePersonnelFailure,
} = securityPersonnelSlice.actions;

export default securityPersonnelSlice.reducer;

