import { BookmarkActions } from "../Reducers/bookmarkReducer";

export const AddBookmark = (newBookmark) => {
  return (dispatch) => {
    dispatch(
      BookmarkActions.bookmarkRecipe({
        recipe: newBookmark,
      })
    );
  };
};

export const removeBookmark = (index) => {
  return (dispatch) => {
    dispatch(
      BookmarkActions.removeBookmark({
        id: index,
      })
    );
  };
};
