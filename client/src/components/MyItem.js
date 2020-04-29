import React, { Component } from 'react';
import { Container, Button, ListGroup, ListGroupItem, Row, Col, Label, Badge } from 'reactstrap';
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
            <Container fluid="sm">
                <Button color="dark" onClick={() => addItem()} >Add</Button>
                <ListGroup>
                    <TransitionGroup className="my-list">
                        {
                            items().map(({ id, name, quantity }) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem tag="a">
                                        <Row>
                                            <Col xs="auto">
                                                <Button className="remove-btn" color="danger" size="sm"
                                                    onClick={() => removeItem()}>&times;</Button>
                                            </Col>
                                            <Col xs="4">
                                                <Label>{name}</Label>
                                            </Col>
                                            <Col xs="4">
                                                <Label><Badge size="md">{quantity}</Badge></Label>
                                            </Col>
                                        </Row>
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