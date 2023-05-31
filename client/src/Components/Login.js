import React,{useState} from "react";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

function Login({onSetLogin}){

    const [formData, setformData] = useState({
        username:"",
        password:""
    })
    function handleSignUp(){
        console.log("handle Signup")
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        onSetLogin(formData)
      }
    function handleChange(e){
        e.preventDefault();
        const name = e.target.name;
        const value =  e.target.value
        setformData({...formData, 
        [name]:value})
        console.log(formData)
    }
    return(
        <div>
            <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            name = 'username'
            value = {formData.username}
            onChange={handleChange}
            placeholder='Username'
            error={{
                content: 'Please enter a valid email address',
                pointing: 'below',
              }}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            name = 'password'
            value = {formData.password}
            onChange={handleChange}
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button  onClick={handleSignUp} content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
            
        </div>
    )


}

export default Login;