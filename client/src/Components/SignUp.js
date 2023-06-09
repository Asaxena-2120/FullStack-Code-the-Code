import React from "react";

import { Form } from 'semantic-ui-react';

function SignUp(){
    return (
        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Input fluid label='Email'  type='email' placeholder='johndoe@gmail.com' />
          <Form.Input fluid label='Password'  type='password' placeholder='password' />
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )

}

export default SignUp