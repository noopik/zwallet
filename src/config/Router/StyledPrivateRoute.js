import styled from 'styled-components';

export const StylingMainContent = styled.main`
  width: 80%;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  /* background-color: pink; */
  gap: 20px;
  .main {
    width: 100%;
    height: 100%;
  }
  /* GLOBAL STYLING  */

  /* START = TYPHOGRAPHY STYLING */
  .text {
    font-size: 14px;
    line-height: 19px;
    color: #6a6a6a;
  }
  .text-heading {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3a3d42;
    margin: 0;
  }
  .text-subheading {
    margin: 0;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: #7a7886;
  }
  .text-link {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #6379f4;
  }

  .text-green {
    color: #1ec15f;
  }
  .text-red {
    color: #ff5b37;
  }
  .anchor {
    text-decoration: none;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
  /* END = TYPHOGRAPHY STYLING */
`;
