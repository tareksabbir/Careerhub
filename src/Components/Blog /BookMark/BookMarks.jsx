/* eslint-disable react/prop-types */
import BookMark from "./BookMark";

const BookMarks = ({ LocalBookMarkData ,readTime}) => {

  return (
    <>
      <div>
        <h1 className="px-5 py-5 mb-5 font-bold text-center text-purple-800 bg-purple-100 border border-purple-600 rounded-lg">Spent time on read : {readTime} min</h1>

        <div className="p-5 bg-gray-200 rounded-xl">
          <h1 className="mb-2 font-bold">
            Bookmarked Blogs : {LocalBookMarkData.length}
          </h1>
          {LocalBookMarkData.map((item, idx) => (
            <BookMark key={idx} bookmark={item}></BookMark>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookMarks;
