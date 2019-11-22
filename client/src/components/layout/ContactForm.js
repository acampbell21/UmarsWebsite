import React, { Component } from 'react';
import { Form, Button, Grid } from 'semantic-ui-react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';

export class ContactForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    axios({
      method: 'POST',
      url: 'http://localhost:5000/send',
      data: {
        name: name,
        email: email,
        message: message,
        phoneNumber: phoneNumber
      }
    }).then(response => {
      console.log(response);
      if (response.data.msg === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.');
      }
    });
  }

  resetForm() {
    document.getElementById('contact-form').reset();
  }

  render() {
    return (
      <Grid padded='vertically' centered>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={8} centered>
            <Form
              id='contact-form'
              onSubmit={this.handleSubmit.bind(this)}
              method='POST'
            >
              <Form.Field>
                <Form.Input
                  label='Name'
                  width={16}
                  placeholder='Name'
                  id='name'
                  type='name'
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='email'>Email</label>
                <Form.Input
                  width={16}
                  placeholder='Email'
                  id='email'
                  type='email'
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Phone Number'
                  placeholder='Phone number'
                  id='phoneNumber'
                  type='phoneNumber'
                />
              </Form.Field>
              <Form.TextArea
                label='Message'
                id='message'
                placeholder='Message'
                style={{ height: '150px' }}
              />
              <Button positive type='submit'>
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ContactForm;
