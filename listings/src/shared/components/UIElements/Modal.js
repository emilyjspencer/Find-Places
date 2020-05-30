import React, { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';

import './Modal.css';

const ModalOverlay = props => {
    const content = (
      <div className={`modal ${props.className}`} style={props.style}>
        <header className={`modal_header ${props.headerClass}`}>
          <h2>{props.header}</h2>
        </header>
        <form onsubmit={props.onSubmit ? props.onSubmit : (event)  => event.preventDefault()}>
          <div className={`modal_content ${props.contentClass}`}>
          {props.children}
          </div>
          <footer className={`modal_footer ${props.footerClass}`}></footer>
          {props.footer}
        </form>
        </div>
        )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
};

const Modal = props => {
    return ( 
    <Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition 
        in={props.show} 
        mountOnEnter 
        unmountOnExit 
        timeout={300} 
        classNames="modal">
        <ModalOverlay {...props} />
        </CSSTransition>
    
    </Fragment>
    );
};


export default Modal;