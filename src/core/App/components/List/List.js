
import React, { Component } from 'react'
import App from '../../App'

export default class List extends Component {
    render() {
        const Task =App.state.tasks.map((tasks) => {
            Id:props.Id,
            content:props.content,
            isCompleted:props.isCompleted;
    });
    }
}

