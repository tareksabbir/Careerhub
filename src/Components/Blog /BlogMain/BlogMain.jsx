import { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMark/BookMarks";
import { addBlogToLocalStore, getBlog } from "../BlogStorage/LocalBlogStorage";
import Background from "../../Background/Background";

const Header = () => {
  const [blogs, setBlogs] = useState([]);
  const [LocalBookMarkData, setLocalBookMarkData] = useState([]);
  const [readTime ,setReadTime] = useState(0)

  const loadData = async () => {
    try {
      const res = await fetch("/blog.json");
      const data = await res.json();
      if (!data) return;
      setBlogs(data);
    } catch (error) {
      if (error) {
        console.log("something went wrong");
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (blogs.length) {
      const getBlogIdFromLS = getBlog();
      const blogId = [];
      for (let id of getBlogIdFromLS) {
        const data = blogs.find((item) => item.id === id);
        blogId.push(data);
      }
      setLocalBookMarkData(blogId);
    }
  }, [blogs]);

  const handleBookMark = (blog) => {
    setLocalBookMarkData([...LocalBookMarkData, blog]);
    addBlogToLocalStore(blog.id);
  };

  const handleMarkedAsRead = (time,id) => {
    setReadTime(time+readTime)
    const filterData = LocalBookMarkData.filter(idx => idx.id !== id)
    setLocalBookMarkData(filterData)
  };

  return (
    <>
    <Background title={"Blog"}></Background>
    <div className="container p-10 mx-auto">
      
      <div className="flex px-10 mt-10">
        <div className="w-2/3">
          <Blogs
            handleBookMark={handleBookMark}
            blogs={blogs}
            handleMarkedAsRead={handleMarkedAsRead}
          ></Blogs>
        </div>
        <div className="w-1/3">
          <BookMarks LocalBookMarkData={LocalBookMarkData} readTime={readTime}></BookMarks>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Header;
