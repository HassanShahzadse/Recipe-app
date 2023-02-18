import { useSelector, useDispatch } from "react-redux";

const Bookmark = () => {
  let bookmarks = useSelector((state) => state.Bookmark.bookmarkedRecipes);
  console.log(bookmarks);
  return (
    <div>
      {bookmarks.map((recipe) => {
        return <p>bookmark</p>;
      })}
    </div>
  );
};

export default Bookmark;
