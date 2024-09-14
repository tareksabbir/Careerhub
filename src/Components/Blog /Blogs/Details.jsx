import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../../Error/Error";
import Background from "../../Background/Background";


const Details = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate()

  const loadData = async () => {
    try {
      const res = await fetch("/blog.json");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      if (error) {
        <Error></Error>;
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (blogs.length > 0) {
      const blog = blogs.find((blog) => blog.id === parseInt(id));
      setSelectedBlog(blog);
    }
  }, [blogs, id]);

  if (!selectedBlog) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center">
        Loading...
      </div>
    );
  }

  const handleBackbutton =()=>{
    navigate(-1)
  }

  console.log(selectedBlog);
  return (
    <>
    <Background title={"Blog Details"}></Background>
    <div className="container flex px-5 mx-auto my-20">
      <img src={selectedBlog.cover} className="rounded-xl" alt="" />
      <div className="p-10">
        {" "}
        <h1 className="mb-5 text-lg font-medium">{selectedBlog.title}</h1>
        <h1>{selectedBlog.description}</h1>
        <button
      onClick={()=>handleBackbutton()}
        className=
            "select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-5"
            
        type="button"
      >
        Go Back
      </button>
      </div>
    </div>
    </>
  );
};

export default Details;
