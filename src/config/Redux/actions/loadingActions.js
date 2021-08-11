import { dispatchTypes } from '../../../utils/dispatchType';

export const showLoading = (status) => {
  return { type: dispatchTypes.setLoading, value: status };
};
