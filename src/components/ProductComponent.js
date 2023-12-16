import React from 'react';
import { useSelector } from 'react-redux';


const ProductComponent = ()=>{
    const products = useSelector((state)=> state.allProducts.products);
   // const {id, title} = products[0];
    console.log(products);
    return(
        <div className='four column wide'>
            <div className='ui link cards'>
                <div className='card'>
                    <div className='image'></div>
                    <div className='content'>
                        <div className='header'>{title}</div>
                    </div>
                </div>
            </div>
            <h1>Product Component</h1>
        </div>
    );
};

export default ProductComponent;