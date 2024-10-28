import React from 'react';
import PropTypes from 'prop-types';
import { IoCheckmarkCircle } from "react-icons/io5";
const Price = ({option}) => {
    const {name , features , price } = option
    return (
        <div>
            <div className=' bg-pink-200 h-full  p-4 rounded-xl space-y-5 flex flex-col '>
                <p className='text-3xl font-bold'> <span className=' md:text-7xl '>{price}</span> / mon</p>
                <p className='font-semibold text-2xl'>{name}</p>
                <ul className='flex-grow'>

                {
                    features.map((item , indx) => <li key={indx} className='flex items-center'> <IoCheckmarkCircle className='mr-2'></IoCheckmarkCircle>{item}</li>)
                }
                </ul>
                <button className='btn bg-orange-200 hover:bg-orange-600'> More Details</button>
            </div>
        </div>
    );
};
Price.propTypes ={
    option:PropTypes.object.isRequired
}
export default Price;