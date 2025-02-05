import React from 'react';
import { Card } from "react-bootstrap";
import Bttn from './Bttn';

export default function ProductCard({ image, title, price }) {
    return (
        <Card className="text-center p-2 shadow-sm "
        style={{ width: "300px", height: "400px" }}>
            <Card.Img 
                variant="top" 
                src={image} 
                style={{ height: "200px", objectFit: "cover" }} // ارتفاع ثابت للصورة
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price} $</Card.Text>
                <Bttn/>
            </Card.Body>
        </Card>
    );
};
