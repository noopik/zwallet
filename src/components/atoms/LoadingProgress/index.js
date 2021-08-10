import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ILLoading } from '../../../assets';

const LoadingProgress = () => {
  const loadingState = useSelector((state) => state.loadingReducer);

  if (!loadingState?.isShow) {
    return null;
  }
  return (
    <StyledLoadingProgress>
      <div className="icon-wrapper">
        <img src={ILLoading} alt="loading" />
      </div>
    </StyledLoadingProgress>
  );
};

export default LoadingProgress;

const StyledLoadingProgress = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #a0a0a05c;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-wrapper {
    width: 250px;
    img {
      width: 100%;
    }
  }
`;
