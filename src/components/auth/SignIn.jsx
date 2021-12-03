import React, { Component } from "react";
import {signIn} from "../../actions/authActions";
import {connect} from "react-redux";
import {Navigate } from "react-router-dom";
import "firebase/compat/auth";
//import {autobind} from "core-decorators"

//@autobind

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
        //Recupération du state contenant l'email et le password
        this.props.signIn(this.state)
    };
    render() {
        /*const { uid } = this.props;
        if(uid) {
            return <Navigate to="/" />
        }*/
        //else {
            
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
            
       // }
    }
}

/*const mapStateToProps = (state) => {
    console.log(state)
    const uid = state.firebase.auth.uid 
    return {
        uid : uid
    }
  }*/


const mapDispatchToProps = dispatch => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}


//export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
export default connect(null, mapDispatchToProps)(SignIn);