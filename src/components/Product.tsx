import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
    product: IProduct
}

const Product = ({ product }: ProductProps) => {

    const [details, setDetails] = useState(false);

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['py-2 px-4 border {btnClassName}', btnBgClassName]

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img alt={product.title} src={product.image} className="w-1/6" />
            <p>{product.title}</p>
            <span className='font-bold'>{product.price}</span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >{details ? 'Hide details' : 'Show details'}</button>

            {details && <div>
                <p>{product.description}</p>
            </div>}

        </div>
    )
}

export default Product