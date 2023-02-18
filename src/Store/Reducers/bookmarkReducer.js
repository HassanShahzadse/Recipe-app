import { createSlice } from "@reduxjs/toolkit";

const initialBookmarkState = {
  bookmarkedRecipes: [],
};

const bookmarkSlice = createSlice({
  name: "Bookmark",
  initialState: initialBookmarkState,
  reducers: {
    bookmarkRecipe(state, action) {
      let arr = action.payload.recipe;
      state.bookmarkedRecipes.push(arr);
    },
    removeBookmark(state, action) {
      let arr = state.bookmarkedRecipes;
      arr.splice(action.payload.id, 1);
      state.bookmarkedRecipes = arr;
    },
  },
});

export const BookmarkActions = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
