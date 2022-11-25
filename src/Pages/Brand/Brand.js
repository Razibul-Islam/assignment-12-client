import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Brand = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Brand;