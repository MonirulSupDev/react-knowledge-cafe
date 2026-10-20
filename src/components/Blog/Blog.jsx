const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  const {
    id,
    cover_photo,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="pb-8 mb-8 border-b border-[#1111111A] last:border-b-0">
      <div className="blog-cover-photo mb-8.5">
        <a href="#">
          <img
            className="rounded-lg w-full"
            src={cover_photo}
            alt={`Cover photo of ${cover_photo}`}
          />
        </a>
      </div>
      <div className="blog-content">
        <div className="blog-author flex items-center justify-between mb-5">
          <div className="blog-author-box flex items-center">
            <div className="blog-author-img me-5">
              <img src={author_img} alt={`Image of ${author}`} />
            </div>
            <div className="blog-author-name">
              <h2 className="text-2xl font-bold text-[#111]">{author}</h2>
              <span className="text-base font-semibold text-[#11111199]">
                {posted_date}
              </span>
            </div>
          </div>
          <div className="blog-reading-time flex items-center text-base font-semibold text-[#11111199]">
            {reading_time} min read
            <button
              onClick={() => handleAddToBookmark(blog)}
              className="blog-bookmark-btn ms-2 text-[#111] hover:text-[#6047ec] transition-all"
            >
              <svg
                className="hover:fill-current transition-all"
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.843 1.07352C14.943 1.20152 15.75 2.15052 15.75 3.25852V18.7515L8.25 15.0015L0.75 18.7515V3.25852C0.75 2.15052 1.556 1.20152 2.657 1.07352C6.37319 0.642159 10.1268 0.642159 13.843 1.07352Z"
                  stroke="currentColor"
                  strokeOpacity="0.6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-[40px] font-bold pe-24 mb-4">
          <a className="hover:text-[#6047ec] transition-all" href="#">
            {title}
          </a>
        </div>
        <p className="blog-hashtags font-medium text-xl text-[#11111199] mb-4">
          {hashtags.map((hashtag, index) => (
            <a key={index} href="#">
              #{hashtag}
              {index < hashtags.length - 1 && " "}
            </a>
          ))}
        </p>
        <button
          onClick={() => handleReadingTime(id, reading_time)}
          className="text-[#6047ec] underline font-semibold text-xl hover:text-[#2805f0] transition-all"
        >
          Mark as read
        </button>
      </div>
    </div>
  );
};

export default Blog;
