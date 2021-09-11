import styled from 'styled-components';
import { customMedia } from '../../components/Layouting/BreakPoints';

export const StyledPhone = styled.div`
  padding: 30px;
  .text-wrapper {
    padding-left: 30px;
    padding-top: 30px;
  }
  form {
    /* width: 450px; */
    height: 250px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    overflow: none;
    .form-input {
      width: 100%;
      margin-bottom: 70px;
    }
  }
  .input-dummy {
    width: 100%;
    margin-top: 70px;
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 70px;
    .btn {
      ${customMedia.lessThan(`653px`)`
        width: 100%; 
      `}
      width: 250px;
    }
  }
  .manage-phone-exist {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
    }
    .icon-wrappper {
      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
`;
