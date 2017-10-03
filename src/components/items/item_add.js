import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions/items'

class ItemAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  saveItem = (values) => {
    this.props.item_add(values)
    this.toggle()
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  addInputField({label, type, meta: { error, touched }, ...fields}){
    return(
      <div className="form-group">
        <label>{label}</label>
        <input {...fields.input } className="form-control" />
      </div>
    )
  }

  addTextAreaField({label, type, meta: {error, touched}, ...fields}){
    return(
      <div className="form-group">
        <label>{label}</label>
        <textarea {...fields.input } className="form-control" />
      </div>
    )
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div className="d-inline">
        <Button color="primary" onClick={this.toggle} className="ml-1 btn-sm">{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <form onSubmit={ handleSubmit(this.saveItem) }>
            <ModalBody>
                <Field component={this.addInputField} name="name" type="text" label="Name" />
                <Field component={this.addTextAreaField} name="description" type="text" label="Description" />
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">Save</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

const ItemAddForm = reduxForm({form: 'item_add'})(ItemAdd)

export default connect(null, actions)(ItemAddForm)