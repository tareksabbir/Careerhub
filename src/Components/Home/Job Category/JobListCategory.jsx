import { useEffect, useState } from "react";
import Error from "../../Error/Error";
import Category from "./Category";
const JobListCategory = () => {
  const [category, setCategory] = useState([]);
  const loadCategory = async () => {
    try {
      const res = await fetch("/categories.json");
      const data = await res.json();
      if (!data) return;
      setCategory(data);
    } catch (error) {
      if (error) {
        <Error></Error>;
      }
    }
  };
  useEffect(() => {
    loadCategory();
  }, []);
  console.log(category);
  return (
    <div className="container mx-auto mt-20">
      <div className="text-center">
        <h1 className="mb-5 text-4xl font-bold">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-20">
        {category.map((item) => (
          <Category key={item.id} item={item}></Category>
        ))}
      </div>
      
    </div>
  );
};

export default JobListCategory;
