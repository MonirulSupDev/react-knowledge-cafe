const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-white p-5 mb-4 rounded-lg">
      <h2 className="text-lg font-semibold text-[#111]">{bookmark.title}</h2>
    </div>
  );
};

export default Bookmark;
