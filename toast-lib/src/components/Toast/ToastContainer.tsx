import React, {FC} from 'react';
import ToastPortal from '../ToastPortal';
import {ToastPortalProps} from '../ToastPortal/ToastPortal';



const ToastContainer: FC<ToastPortalProps> = ({children}) => {
  return <ToastPortal>{children}</ToastPortal>;
};

export default ToastContainer;