import React, { Component } from 'react';
class LoginForm extends Component {
    render(){
        return(
            <div>
                <h3>Login</h3>
                <form action="#">
                    <input type="email" placeholder="Email" className="m-2"/>
                    <br/>
                    <input type="password" placeholder="Password" className="m-2"/>
                    <br/>
                    <button onClick={() => alert('DERP ain\'t workin\'')} className="btn btn-primary mr-3">Log in</button>
                    <label for="chk"><input type="checkbox" name="chk"/> Remember me!</label>
                    
                </form>
            </div>
        );

    }
}

export default LoginForm;