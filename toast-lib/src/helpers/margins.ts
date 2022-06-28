import { TOAST_MARGIN } from '../constants';



export const getMargin = (toastMargin: string) => {
  switch (toastMargin) {
  case TOAST_MARGIN.small:
    return '15px';
  case TOAST_MARGIN.medium:
    return '20px';
  case TOAST_MARGIN.large:
    return '30px';
  default:
    return '15px';
  }
};
