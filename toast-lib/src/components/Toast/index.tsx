import React, {FC} from 'react';
import {useToastPortal} from '../../hooks';

export interface ToastProps {
  title: string;
  message: string;
  type: 'Warning' | 'Success'|'Info' | 'Error'
  backgroundColor?: string;
  padding?: 'small' | 'medium' | 'large';
  onClose?: () => void;
}

const Toast: FC<ToastProps> = ({title, message, ...props}: ToastProps) => {
    //  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    const {loaded, portalId} = useToastPortal();

    return <div >
        <div {...props}>
        {title}{message}
        </div>
        </div>;
};

export default Toast;