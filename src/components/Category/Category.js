import React from 'react';
import './Category.css';

const Category = (props) => {
    return (
        <div className="category">
            <p>{props.children}</p>
        </div>
    )
}

export default Category; 