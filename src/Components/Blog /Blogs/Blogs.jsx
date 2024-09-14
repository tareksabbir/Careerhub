/* eslint-disable react/prop-types */
import Blog from "./Blog";

const Blogs = ({ handleBookMark, blogs, handleMarkedAsRead }) => {
  return (
    <div>
      <div className="pr-5">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookMark={handleBookMark}
            handleMarkedAsRead={handleMarkedAsRead}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
