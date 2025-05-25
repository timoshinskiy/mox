import React from 'react';

const Modal = (props) => {
    return (
        <div className={'modal-back'} onClick={()=>props.setOpen(false)}>
            <div className={'modal-container'} onClick={(e)=>e.stopPropagation()}>
                <div className={'modal-close-icon'} onClick={()=>props.setOpen(false)}>X</div>
                <div className={'modal-content'}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Modal;