import React from 'react';
import Toast from '../components/Toast';
import {ToastContainer} from '../components/Toast/ToastContainer';
import { uuid } from '../helpers';
import { TOAST_TYPES, TOAST_TEXT, COLORS } from '../constants';
import iconSuccess from '../assets/success.svg';
import iconSearch from '../assets/search.svg';
import iconWarning from '../assets/warning.svg';
import iconInfo from '../assets/info.svg';

type ToastListItems = Array<ToastItem>;

export interface ToastItem {
    toastId?: string;
    title?: string;
    bgColor?: string;
    animation?: string;
    textColor?: string;
    type?: string;
    position?: string;
    delay?: number;
    toastList?: ToastListItems;
    autoDelete?: boolean;
    deleteDelay?:  number;
    description?: string;
}




let toastList: ToastListItems = [];

class ToastClass {
    private static singleton: ToastClass;

    toastList: any;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
     constructor(toastList: ToastListItems) {
        if (ToastClass.singleton) {
        throw new Error('Something went wrong ...');
    }
    ToastClass.singleton = this;
    this.toastList =  toastList;
  }


  getId(): string {
    return `toast-${uuid()}`;
  }

  getTitle(properties: ToastItem) {
    switch (properties.type) {
      case TOAST_TYPES.success:
        return TOAST_TEXT.success;
      case TOAST_TYPES.error:
        return TOAST_TEXT.error;
      case TOAST_TYPES.info:
        return TOAST_TEXT.info;
      case TOAST_TYPES.warning:
        return TOAST_TEXT.warning;
      default:
        return TOAST_TYPES.info;
    }
  }

    getTextColor(properties: ToastItem) {
    switch (properties.type) {
      case TOAST_TYPES.success:
        return COLORS.white;
      case TOAST_TYPES.error:
        return COLORS.white;
      case TOAST_TYPES.info:
        return COLORS.white;
      case TOAST_TYPES.warning:
        return COLORS.black;
      default:
        return COLORS.white;
    }
  }



    getBackgroundColor(properties: ToastItem) {
    switch (properties.type) {
      case TOAST_TYPES.success:
        return COLORS.green;
        break;
      case TOAST_TYPES.error:
        return COLORS.red;
        break;
      case TOAST_TYPES.info:
        return COLORS.purple;
        break;
      case TOAST_TYPES.warning:
        return COLORS.yellow;
        break;
      default:
        return COLORS.green;
        break;
    }
  }

    getIcon(properties: ToastItem) {
    switch (properties.type) {
      case TOAST_TYPES.success:
        return iconSuccess;
      case TOAST_TYPES.error:
        return iconSearch;
      case TOAST_TYPES.info:
        return iconInfo;
      case TOAST_TYPES.warning:
        return iconWarning;
      default:
        return iconInfo;
    }
  }


     getProperty(description: string, properties: ToastItem) {
      return {
        ...properties,
        id: this.getId(),
        description,
        title: this.getTitle(properties),
        textColor: this.getTextColor(properties),
        bgColor: this.getBackgroundColor(properties),
        icon: this.getIcon(properties),
      };
    }


     getToast(description: string, properties: ToastItem) {
    if (toastList.length < 3)
      toastList = [...toastList, this.getProperty(description, properties)];
    return (
      <ToastContainer>
        <Toast
            toastList={toastList}
            position={properties.position}
            autoDelete={properties.autoDelete}
            deleteDelay={properties.delay}
            animation={properties.animation}
            title={properties.title}
            type={'info'}
            description={description}
            delay={1000}
            bgColor={properties.bgColor}
            textColor={properties.textColor}
                   />
      </ToastContainer>
    );
  }

}

export const toastToShow = new ToastClass(toastList);
