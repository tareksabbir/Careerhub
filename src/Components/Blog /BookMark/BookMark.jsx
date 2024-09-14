/* eslint-disable react/prop-types */
const BookMark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className="relative z-0 p-5 mb-3 transition-all duration-300 bg-white border rounded-lg shadow-xl hover:scale-110">
            <h1 className="text-sm">{title}</h1>
        </div>
    );
};

export default BookMark;