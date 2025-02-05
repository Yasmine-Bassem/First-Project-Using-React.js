import React from 'react';
import ProductCard from './ProductCard';
import im1 from '../Assest2/img/p1.avif';
import im2 from '../Assest2/img/p2.jpg';
import im3 from '../Assest2/img/p4.jpg';
import im4 from '../Assest2/img/p4.jpg';
import im5 from '../Assest2/img/p1.avif';
import im6 from '../Assest2/img/p2.jpg';

const cardss = [
    { id: 1, img: im1, title: "Product1", price: "10" },
    { id: 2, img: im2, title: "Product2", price: "10" },
    { id: 3, img: im3, title: "Product3", price: "10" },
    { id: 4, img: im4, title: "Product4", price: "10" },
    { id: 5, img: im5, title: "Product5", price: "10" },
    { id: 6, img:im6, title: "Product6", price: "10" }
];

export default function LoopCard() {
    return (
        <div className="container mt-4">
            <div className="row">
                {cardss.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <ProductCard
                            image={item.img}
                            title={item.title}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
