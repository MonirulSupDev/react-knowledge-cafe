import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div className="text-2xl font-bold text-[#6047ec] px-6 py-5 bg-[#6047ec1a] rounded-lg mb-6 border border-[#6047ec]">
        <span>Spent time on read : {readingTime} min</span>
      </div>
      <div className="bg-[#1111110d] rounded-lg p-7">
        <h2 className="text-2xl font-bold mb-6">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
