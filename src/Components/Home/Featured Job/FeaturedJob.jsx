import { useState } from "react";

const FeaturedJob = () => {
    const [featured,setFeatured] = useState([])
    console.log(featured,setFeatured)
    return (
        <div className="text-center">
            <h1 className="text-5xl">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
    );
};

export default FeaturedJob;