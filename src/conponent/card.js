import React from 'react';
import Card from 'react-bootstrap/Card';

function card(props)  {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.overview}
                    </Card.Text>
                </Card.Body>
            </Card>
        );

}

export default card;