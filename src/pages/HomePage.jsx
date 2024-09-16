import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div>
            Home
            <Link to='/admin'>Go to admin</Link>
            <Link to='/profile'>Go to profile</Link>
        </div>
    )
}
export default HomePage;