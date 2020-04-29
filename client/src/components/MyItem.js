import React, { Component } from 'react';
import { Container, Button, ListGroup, ListGroupItem, Row, Col, Label, Badge } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getListItems, deleteListItem } from '../actions/ListAction';
import PropTypes from 'prop-types';
import ListItemModal from './ListItemModal';

class MyItem extends Component {
    componentDidMount() {
        this.props.getListItems();
    }
    removeItem = id => this.props.deleteListItem(id);
    formatDate = val => {
        const dt = new Date(val);
        return `${dt.toLocaleDateString()}`;
    }
    render() {
        const { myItems } = this.props.itemList;
        return (
            <Container fluid="sm">
                <ListItemModal />
                <ListGroup>
                    <TransitionGroup className="my-list">
                        {
                            myItems.map(({ _id, name, quantity, createdOn }) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem tag="a">
                                        <Row>
                                            <Col xs="auto">
                                                <Button className="remove-btn" color="danger" size="sm"
                                                    onClick={() => this.removeItem(_id)}>&times;</Button>
                                            </Col>
                                            <Col xs="4">
                                                <Label>{name}</Label>
                                            </Col>
                                            <Col xs="2">
                                                <Label><Badge size="md">{quantity}</Badge></Label>
                                            </Col>
                                            <Col xs="2">
                                                <Label>
                                                    {this.formatDate(createdOn)}
                                                </Label>
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