import React, { Component } from "react";
import { createPortal } from "react-dom";
import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        console.log('MODAL componentDidMount');
    };

componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    console.log('MODAL componentWillUnmount');
};

handleKeyDown = e => {

    if(e.code === 'Escape') {
        this.props.onClose();
    };
};

handleBackdrop = e => {
    if(e.currentTarget === e.target) {
        this.props.onClose();
    };
};

render() {
    return createPortal(
        <div className="Modal__backdrop" onClick={this.handleBackdrop}>
        <div className="Modal__content">{this.props.children}</div>
    </div>,
     modalRoot);
};
};