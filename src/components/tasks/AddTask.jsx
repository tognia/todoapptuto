import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from '../../actions/taskActions';

class AddTask extends Component {
    state = {
        task: "",
        checked: "false"
        
     };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state)
        document.getElementById("addTaskForm").reset();
        console.log(this.state);
    };
    render() {
        return (
            <>
        <form className="container"
            id = "addTaskForm" 
            autoComplete="off" 
            style={{marginTop: "30px" }}
            onSubmit = {this.handleSubmit}
        > 
            <legend><h4>Add Task</h4></legend>
                        <div className="form-group">
                            <label htmlFor="task">Add a task</label>
                            <input type="text" className="form-control" id="task"
                             onChange = {this.handleChange}
                            />
                            
                        </div>
                        
                        <p></p>
                        
                        <button type="submit" className="btn btn-primary">Add</button>
    </form>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    };
};

export default connect(null, mapDispatchToProps)(AddTask)