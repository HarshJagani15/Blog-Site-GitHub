import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

export const DashboardSlice = createSlice({
  name: 'Dashboard',
  initialState,
  reducers: {
    setBlogItem: (state, action) => {
      state.push({
        blogTitle: action.payload.blogTitle,
        blogdetail: action.payload.blogdetail,
        image: action.payload.image,
        date: action.payload.date,
        isExpanded: action.payload.isExpanded
      })
    },

    deleteBlog: (state, action) => {
      return state.filter((value, index) => index !== action.payload.index);
    },

    editBlog: (state, action) => {
      state[action.payload.index].blogTitle = action.payload.blogTitle;
      state[action.payload.index].blogdetail = action.payload.blogdetail;
      state[action.payload.index].image = action.payload.image;
    },

    handleExpanding: (state, action) => {
      const index = action.payload.index;
      for (let i = 0; i < state.length; i++) {
        if (i === index) {
          continue;
        }
        state[i].isExpanded = false;
      }
      state[index].isExpanded = !state[index].isExpanded;
    }
  }
})

export const action = DashboardSlice.actions

export default DashboardSlice.reducer