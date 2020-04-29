import React, { Component } from 'react';
import { Container, Button, ListGroup, ListGroupItem, Row, Col, Label, Badge } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getListItems, deleteListItem } from '../actions/ListAction';
import PropTypes from 'prop-types';
import ListItemModal from './ListItemModal';

class MyItem extends Component {
    removeItem = id => {
        this.props.deleteListItem(id);
    }

    componentDidMount() {
        this.props.getListItems();
    }
    render() {
        const { myItems } = this.props.itemList;
        console.log(myItems);
        return (
            <Container fluid="sm">
                <ListItemModal />
                <ListGroup>
                    <TransitionGroup className="my-list">
                        {
                            myItems.map(({ id, name, quantity }) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <ListGroupItem tag="a">
                                        <Row>
                                            <Col xs="auto">
                                                <Button className="remove-btn" color="danger" size="sm"
                                                    onClick={() => this.removeItem(id)}>&times;</Button>
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
    deleteListItem: PropTypes.func.isRequired,
    itemList: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    itemList: state.itemList
});

export default connect(mapStateToProps, {
    getListItems,
    deleteListItem,
})(MyItem);