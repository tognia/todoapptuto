import React, { Component } from "react";

class SignIn extends Component {
    
    state = {
        email: "fqffqf",
        password: "qffqfq",
     };

    //handleChange(e) {    this.setState({value: e.target.value});   
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };
    render() {
        return (
            <>
        <form className="container" 
            autoComplete="off" 
            style={{marginTop: "30px" }}
            onSubmit = {this.handleSubmit}
        > 
            <legend>
                {" "}
                <h4>Sign In</h4>
            </legend>
                        <div className="form-group">
                            <label htmlFor="email">Enter Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email"
                             onChange = {this.handleChange}
                            />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Enter Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password"
                            onChange = {this.handleChange}/>
                        </div>
                        <p></p>
                        
                        <button type="submit" className="btn btn-primary">Sign In</button>
    </form>
            </>
        )
    }
}

export default SignIn