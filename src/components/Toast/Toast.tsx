import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastCompProps from '../../interfaces/toast.interfaces'

const ToastComp: React.FC<ToastCompProps> = ({ show, onClose, message }) => {
  return (
    <Toast 
        className="text-white position-fixed bottom-0 end-0 m-3" 
        bg='danger' 
        show={show} 
        onClose={onClose} 
        delay={3000} 
        autohide
    >
      <Toast.Header>
        <strong className="me-auto">Error</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};
export default ToastComp;
