import React from 'react';
import Card from 'react-bootstrap/Card';

const card = (porps) => {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img onClick={() => {
            }} variant="top" src={porps.src}/>
            <Card.Body style={{display: 'block'}}>
                <Card.Title>{porps.title}</Card.Title>
                <Card.Text>
                    {porps.overview}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default card;