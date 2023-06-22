import React,{useState, useEffect} from "react";
import { Container, Button, Form, Input } from 'semantic-ui-react';


function Contact(){
    return (
        <>
       

 <Container style={{width: '500px', display: 'block',
  margin: 'auto' }}>

  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='joe@schmoe.com'
      error={{
        content: 'Please enter a valid email address',
        pointing: 'below',
      }}
    />
    <Form.Field>
    <Form.TextArea label='Message' placeholder='Message...' />
    </Form.Field>
    
    <Button style={{ display: 'block',
  margin: 'auto' }}color='blue' type='submit'>SEND MESSAGE</Button>
    
  </Form>


  </Container>
        </>
    )
 
    
}

export default Contact;