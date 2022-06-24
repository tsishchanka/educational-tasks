import React, {ReactNode} from 'react';

import ReactDOM from 'react-dom';

import {useToastPortal} from '../../hooks';
// import Toast from '../Toast';
// import {ToastProps} from '../Toast/index';
export type ToastPortalProps = {
  children: ReactNode;
}

const ToastPortal = ({children}:ToastPortalProps) => {
   const {loaded, portalId} = useToastPortal();

    return loaded ? (
        ReactDOM.createPortal(    
            children,       
            document.getElementById(portalId)!,
    )) : <></>;
};

export default ToastPortal;
