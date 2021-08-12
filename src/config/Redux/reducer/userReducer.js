import { dispatchTypes } from '../../../utils/dispatchType';

const initialData = {
  data: {},
  error: null,
  message: null,
  status: null,
};

export const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case dispatchTypes.setUserProfile:
      return {
        ...state,
        data: action.payload.data,
      };
    case dispatchTypes.postRegisterUser:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case dispatchTypes.postLoginUser:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case dispatchTypes.getActivationUser:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case dispatchTypes.postSetPinUser:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case dispatchTypes.postForgotPasswordUser:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    case dispatchTypes.postResetPasswordUser:
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    default:
      return state;
  }
};
