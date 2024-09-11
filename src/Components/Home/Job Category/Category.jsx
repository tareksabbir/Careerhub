/* eslint-disable react/prop-types */

const Category = ({item}) => {
    const {category_name,availability,logo}=item
    return (
        <div className="p-10 border rounded-lg b">
            <img src={logo} alt="" />
           <h1 className="mt-5 text-lg font-bold">{category_name}</h1>
           <h1>{availability}</h1>
        </div>
    );
};

export default Category;