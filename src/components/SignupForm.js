import React,{Component} from 'react';
import {Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';

class SignupForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-4 offset-md-4">
                <Form>
                    <h2 style={{"textAlign":"center", "marginTop":"20px"}}>Enter Employee Details</h2>
                    <hr/>
                    <FormGroup> 
                        <FormLabel>Firstname</FormLabel>
                        <FormControl
                            type="text"
                            name="firstname"
                            placeholder="Firstname"
                        />
                    </FormGroup>
                
                    <FormGroup> 
                        <FormLabel>Lastname</FormLabel>
                        <FormControl
                            type="text"
                            name="lastname"
                            placeholder="Lastname"
                        />
                    </FormGroup>

                    <FormGroup> 
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            type="text"
                            name="email"
                            placeholder="Email"
                        />
                    </FormGroup>

                    <FormGroup> 
                        <FormLabel>Mobile</FormLabel>
                        <FormControl
                            type="text"
                            name="mobile"
                            placeholder="Mobile"
                        />
                    </FormGroup>

                    <FormGroup> 
                        <FormLabel>City</FormLabel>
                        <FormControl
                            type="text"
                            name="city"
                            placeholder="City/Village"
                    />
                    </FormGroup>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </div>
         );
    }
}
 
export default SignupForm;