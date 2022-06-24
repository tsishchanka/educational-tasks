import React, {FC, useLayoutEffect,useEffect, useState} from 'react';
import {ToastWrapper, Button, ImgBox, TextWrapper, 
  Title, Description, Container, ToastMain} from './Toast.styles';
import ErrorBoundary from '../ErrorBoundary';


export interface ToastItemArgs {
    title?: string;
    bgColor?: string;
    animation?: string;
    type: 'warning' | 'success' | 'info' | 'error';
    position?: string;   
    delay: number;
    autoDelete?: boolean;
    deleteDelay?:  number;
    toastList: Array<any>;
    description?: string;
    textColor?: string;
}


const Toast: FC<ToastItemArgs> = ({ ...props}) => {
    const { toastList, position, title, description,  autoDelete, deleteDelay, textColor, animation, bgColor } = props;
  const [list, setList] = useState([toastList]);
  useLayoutEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        handleDeleteToast(toastList[0].id);
      }
    }, deleteDelay);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, deleteDelay, list]);
    

  const handleDeleteToast = (id: string): void => {
    const listItemIndex = list.findIndex((e: any) => e.id === id);
    const toastItem = toastList.findIndex((e: any): boolean => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastItem, 1);
    setList([...list]);
  };


    return  (
    <ErrorBoundary>
        <ToastWrapper animation={animation} bgColor={bgColor} >
        <Container className={position}>
          {list.map((toast: any) => (            
            <ToastMain
              key={toast.id+'1'}
              style={{
                backgroundColor: bgColor === '' ? toast.bgColor : bgColor,
              }}  onDrag={() => handleDeleteToast(toast.id)} draggable={true}
            >
              
              <ImgBox style={{
                    color: textColor === '' ? toast.textColor : textColor,
                  }}>
                <img src={toast.icon} />
              </ImgBox>
              <TextWrapper >
                <Title>
                  {title !== '' ? title : toast.title}
                </Title>
                <Description style={{
                    color: textColor === '' ? toast.textColor : textColor,
                  }}>{description !== '' ? description : toast.description}</Description>
              <Button
              
                onClick={() => handleDeleteToast(toast.id)}
                style={{
                    color: textColor === '' ? toast.textColor : textColor,
                  }}
              >
                X
              </Button>
              </TextWrapper>
            </ToastMain>
          ))}
        </Container>
      </ToastWrapper>
      </ErrorBoundary>
    );
};

export default Toast;