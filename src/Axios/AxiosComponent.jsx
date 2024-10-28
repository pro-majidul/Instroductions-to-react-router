import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Phones from './Phones';

const AxiosComponent = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const items = data.data.data;
            const itemsData = items.map(ele => {
                const phones ={
                    name : ele.phone_name ,
                    price : parseInt( ele.slug.split('-')[1])
                }
                return phones
            })
            console.log(itemsData);
            setPhones(itemsData)

        })
    }, [])


    return (
        <div>
            <Phones phone={phones}></Phones>
        </div>
    );
};

export default AxiosComponent;