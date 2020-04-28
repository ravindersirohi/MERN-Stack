import React, { Component } from 'react';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class MyItem extends Component {
    render() {
        const items = () => [
            { id: 1, name: 'Mango', quantity: 8 },
            { id: 2, name: 'Grapes', quantity: 2 },
            { id: 3, name: 'Apple', quantity: 5 }
        ];
        console.log(items());
        const addItem = event => {
            console.log('AddI tem');
        }
        const removeItem = event => {
            console.log('Remove Item');
        }
        return (
            <Container>
                <Button color="dark" onClick={() => addItem()} >Add</Button>
                <ListGroup>
                    <TransitionGroup className="my-list">
                        {
                            items().map(({ id, name, quantity }) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        <Button className="remove-btn" color="danger" size="sm"
                                            onClick={() => removeItem()}>&times;</Button>
                                        {name} ({quantity})
                                    </ListGroupItem>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default MyItem;