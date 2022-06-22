import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import {useToastPortal} from '../../hooks';
import Toast from '../Toast';
import {ToastProps} from '../Toast/index';




const ToastPortal = (props: ToastProps) => {
   const {loaded, portalId} = useToastPortal();

    return loaded ? (
        ReactDOM.createPortal(           
            <Toast {...props}/>,          
            document.getElementById(portalId)!,
    )) : <></>;
};

export default ToastPortal;
