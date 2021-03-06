import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Button, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { addListItem } from '../actions/ListAction';
import PropTypes from 'prop-types';
class ListItemModal extends Component {

    state = {
        isModal: false,
        name: '',
        quantity: 1,
    }
    toggle = () => {
        this.setState({
            isModal: !this.state.isModal
        });
    }
    submit = event => {
        event.preventDefault();
        console.table(this.state);
        const newListItem = {
            name:this.state.name,
            quantity:this.state.quantity
        }
        this.props.addListItem(newListItem);
        this.toggle();
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <Button color="dark" onClick={this.toggle}>Add</Button>
                <Modal isOpen={this.state.isModal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submit}>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" placeholder="Name"
                                    onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="quantity">Quantity</Label>
                                <Input type="text" name="quantity" placeholder="Quantity"
                                    value={this.state.quantity}
                                    onChange={this.onChange} />
                            </FormGroup>
                        </Form>
                        <Button color="success" block onClick={this.submit}>Submit</Button>
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}
ListItemModal.propTypes = {
    addListItem: PropTypes.func.isRequired,
    itemList: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    itemList: state.itemList
});

export default connect(mapStateToProps, { addListItem, })(ListItemModal);