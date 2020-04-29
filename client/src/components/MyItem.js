import React, { Component } from 'react';
import { Container, Button, ListGroup, ListGroupItem, Row, Col, Label, Badge } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getListItems } from '../actions/ListAction';
import PropTypes from 'prop-types';

class MyItem extends Component {
    addItem = event => {
        console.log('AddI tem');
    }
    removeItem = event => {
        console.log('Remove Item');
    }

    componentDidMount() {
        this.props.getListItems();
    }
    render() {
        const { myItems } = this.props.itemList;
        console.log(myItems);
        return (
            <Container fluid="sm">
                <Button color="dark" onClick={() => this.addItem()} >Add</Button>
                <ListGroup>
                    <TransitionGroup className="my-list">
                        {
                            myItems.map(({ id, name, quantity }) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem tag="a">
                                        <Row>
                                            <Col xs="auto">
                                                <Button className="remove-btn" color="danger" size="sm"
                                                    onClick={() => this.removeItem()}>&times;</Button>
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

MyItem.propTypes = {
    getListItems: PropTypes.func.isRequired,
    itemList: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    itemList: state.itemList
});

export default connect(mapStateToProps, { getListItems })(MyItem);