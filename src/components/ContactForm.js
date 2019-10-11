import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'whatwg-fetch' // Fetch Polyfill

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Form = styled.form``

const Name = styled.input`
  border: 0;
  padding: 10px;
  color: #333;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`

const Email = styled.input`
  border: 0;
  padding: 10px;
  color: #333;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`

const Message = styled.textarea`
  border: 0;
  padding: 10px;
  color: #333;
  border: solid 1px #ccc;
  margin: 0 0 20px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
`

const Submit = styled.input`
  border: solid 1px #ccc;
  padding: 15px 30px;
  margin: 0 0 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border-radius: 0;
  background-color: #fff;
`

const ModalButton = styled.button`
  border: solid 1px #ccc;
  padding: 15px 30px;
  margin: 0 0 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border-radius: 0;
  background-color: #fff;
`

const Modal = styled.div`
  background: ghostwhite;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 2000;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
      submitting: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    this.setState({
      submitting: true,
    })
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
      submitting: false,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <Name
          name="name"
          type="text"
          title="Name"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
          disabled={this.state.submitting}
        />
        <Email
          name="email"
          type="email"
          title="Email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
          disabled={this.state.submitting}
        />
        <Message
          name="message"
          title="Message"
          type="text"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
          disabled={this.state.submitting}
        />
        <Submit
          name="submit"
          type="submit"
          value={this.state.submitting ? 'Sending...' : 'Send'}
          disabled={this.state.submitting}
        />
        <ModalOverlay
          onClick={this.closeModal}
          visible={this.state.showModal}
        />
        <Modal visible={this.state.showModal}>
          <p>
            Thank you for reaching out. I will get back to you as soon as
            possible.
          </p>
          <ModalButton onClick={this.closeModal}>Okay</ModalButton>
        </Modal>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
