import styled from 'styled-components';
import { customMedia } from '../../components/Layouting/BreakPoints';

export const StylingMainContent = styled.main`
  padding-top: 120px;
  width: 80%;
  ${customMedia.lessThan('1000px')`
      width: 90%; 
  `}
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
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
  .text-regular {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #7a7886;
  }
  .text-heading-bold {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #514f5b;
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
