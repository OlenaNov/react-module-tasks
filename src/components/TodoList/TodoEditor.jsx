import React, { Component } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import './TodoEditor.css'

export class TodoEditor extends Component {
    state = {
        message: "",
    };

    handleChange = e => {
        this.setState({
            message: e.currentTarget.value,
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        if(!this.state.message) {
            Notify.warning('Todo cannot be empty!');
            return;
        }
        this.props.onSubmit(this.state.message);
        this.setState({
            message: "",
        })
    }

    render() {
        return (
            <form 
            className="TodoEditorForm"
            onSubmit={this.handleSubmit}>
                <textarea 
                value={this.state.message}
                onChange={this.handleChange}
                ></textarea>
                <button type="submit">Save</button>
            </form>
        )
    }
}