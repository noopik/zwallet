import styled from 'styled-components';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { colors } from '../../utils';

export const LandingPageStyles = styled.div`
  padding-top: 100px;

  /* START = BG LAYER  */
  .bg-layer {
    position: absolute;
    right: 0;
    width: 40%;
    ${customMedia.lessThan('desktop')` 
    width: 60%;
  `}
  }
  /* END = BG LAYER  */

  /* START = Global Styling In Curren Page */
  .custom-container {
    width: 80%;
    margin: 0 auto;
  }
  .title-section {
    font-style: normal;
    font-weight: 800;
    font-size: 60px;
    line-height: 93px;
    color: #3a3d42;
    ${customMedia.lessThan('668px')` 
    width: 60%;
  `}
    .heading.primary {
      color: ${colors.primary};
    }
    &.center {
      text-align: center;
    }

    ${customMedia.lessThan('laptop')` 
     font-size: 55px;
     line-height: 60px;
  `}
    ${customMedia.lessThan('tablet')` 
      font-size: 40px;
      line-height: 45px;
  `}
         ${customMedia.lessThan('mobile')` 
      font-size: 25px;
      line-height: 30px;
  `}
         ${customMedia.lessThan('minimobile')` 
      font-size: 20px;
      line-height: 25px;
  `}
  }
  .paragraph {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 31px;
    text-align: center;
    color: #3a3d42;
  }
  .card {
    background: #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 25px;
  }
  /* END = Global Styling In Curren Page */

  /* START = HEADING PAGE */
  .heading-section {
    background-color: white;
    height: 100vh;
  }
  /* END = HEADING PAGE */

  /* START = NAVBAR */
  nav {
    position: fixed;
    width: 100vw;
    top: 0;
    background-color: ${({ active }) => active && 'red'};
    background-color: white;
    box-shadow: 0px 6px 40px rgba(173, 173, 173, 0.25);
    z-index: 9;
    .custom-container {
      padding: 25px;
      display: flex;
      justify-content: space-between;
      ${customMedia.lessThan('mobile')` 
     padding-left: 5px;
     padding-right: 5px;
  `}

      .logo {
        font-style: normal;
        font-weight: bold;
        font-size: 29px;
        line-height: 40px;
        color: ${colors.primary};
        ${customMedia.lessThan('mobile')` 
    font-size: 25px;
     padding-right: 10px;
  `}
        ${customMedia.lessThan('minimobile')` 
    font-size: 20px;
  `}
      }
      .btn-wrapper {
        display: flex;
        gap: 1rem;
        z-index: 9;
        .button {
          width: 120px;
          height: 48px;
          border: 15px;
          border-radius: 15px;
          ${customMedia.lessThan('mobile')` 
      width: 70px;
  `}
          ${customMedia.lessThan('minimobile')` 
      width: 50px;
      height: 30px;
  `}
          &.default {
            background-color: transparent;
            border: 1px solid ${colors.primary};
            color: ${colors.primary};
          }
          &.filled {
            background-color: ${colors.primary};
            color: white;
            border: 0;
          }
        }
      }
    }
  }
  /* END = NAVBAR */

  /* START = HEADER SECTION*/
  header {
    display: flex;
    .right {
      /* background-color: yellow; */
      width: 40%;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      padding-top: 5rem;
      gap: 3rem;
      ${customMedia.lessThan('laptop')` 
    padding-top: 5rem;
  `}
      ${customMedia.lessThan('tablet')` 
    padding-top: 2.5rem;
  `}
         ${customMedia.lessThan('mobile')` 
  padding-top: 2rem;
  `}
         ${customMedia.lessThan('minimobile')` 
  padding-top: 1rem;
  `}
      .title-section {
        margin-bottom: 160px;
      }
      .button.primary {
        width: 170px;
        padding: 1rem;
        font: inherit;
        color: white;
        background-color: ${colors.primary};
        border: 0;

        border-radius: 12px;
      }
    }
    aside {
      /* background-color: pink; */
      width: 60%;
    }
    .image-wrapper {
      /* background-color: gray; */
      display: flex;
      justify-content: center;

      img {
        z-index: 0;
        margin-left: 20rem;

        ${customMedia.lessThan('laptop')` 
     width: 80%;
  `}
        ${customMedia.lessThan('tablet')` 
      margin-left: 10rem;
  `}
         ${customMedia.lessThan('mobile')` 
     margin-left: 5rem;
  `}
         ${customMedia.lessThan('minimobile')` 
  `}
      }
    }
  }
  /* END = NAVBAR SECTION */

  /* START = ABOUT APPLICATION SECTION */
  section {
    &.about-application {
      background: rgba(71, 58, 209, 0.06);
      padding: 80px 0;
      .service-wrapper {
        display: flex;
        gap: 2rem;
        justify-content: center;
        ${customMedia.lessThan('tablet')` 
     flex-direction:column;
  `}
      }
      .service-wrapper {
        .item-service {
          padding: 40px 20px;
          max-width: 344px;

          h2 {
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 31px;
            color: #3a3d42;
            text-align: center;
          }
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 31px;
            text-align: center;
          }
          .icon-wrapper {
            display: flex;
            justify-content: center;
            .icon {
              width: 60px;
            }
          }
        }
      }
    }
  }
  /* END = ABOUT APPLICATION SECTION */

  /* START = PARTNERS  SECTION */
  section {
    &.partners-section {
      padding: 120px 0;

      .custom-container {
        display: flex;
        .left {
          width: 30%;
          ${customMedia.lessThan('tablet')` 
     width: 100%;
  `}
          p {
            text-align: left;
          }
        }
        ${customMedia.lessThan('tablet')` 
     flex-direction:column;
  `}
        .right {
          width: 70%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          ${customMedia.lessThan('tablet')` 
     width: 100%;
  `}
          .row {
            display: flex;
            margin-left: 0;
            gap: 1rem;
            width: max-content;
            ${customMedia.lessThan('tablet')` 
  flex-direction: column;
  `}
            .image-wrapper {
              width: 150px;
              height: 150px;
              display: flex;
              justify-content: center;
              align-self: center;

              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                /* height: max-content; */
              }
            }
          }
          /* background-color: yellow; */
        }
      }
    }
  }

  /* END = PARTNERS  SECTION */

  /* START = PARTNERS  SECTION */
  section {
    &.features-section {
      background: rgba(71, 58, 209, 0.06);
      .custom-container {
        display: flex;
        ${customMedia.lessThan('tablet')` 
     flex-direction:column;
  `}
        .left {
          margin-left: 30px;
          ${customMedia.lessThan('tablet')` 
   margin-left: 0px;
  `}
          .image-wrapper {
            img {
              ${customMedia.lessThan('tablet')` 
  width: 100%;
  `}
            }
          }
        }
        .right {
          padding-top: 70px;
          h1 {
            margin-bottom: 40px;
          }
          .feature-item {
            margin-bottom: 30px;
            padding: 25px 1rem;
            .title {
              display: flex;
              gap: 1rem;
              h3 {
                font-style: normal;
                font-weight: bold;
                font-size: 20px;
                line-height: 31px;
                color: #3a3d42;
                &.number {
                  color: ${colors.primary};
                }
              }
            }
            p.paragraph {
              text-align: left;
            }
          }
        }
      }
    }
  }
  /* END = PARTNERS  SECTION */

  /* START = USERS  SECTION */
  section {
    &.users-section {
      padding: 120px;
      ${customMedia.lessThan('tablet')` 
      padding: 10px;
  `}
      .card-users-wrapper {
        margin-top: 40px;
        display: flex;
        gap: 1rem;
        justify-content: center;
        ${customMedia.lessThan('tablet')` 
     flex-direction:column;
  `}
        .user {
          padding: 40px 30px;
          max-width: 367px;
          .image-profile-wrapper {
            text-align: center;
            margin-bottom: 1rem;
          }
          h2 {
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 31px;
            text-align: center;
            color: #3a3d42;
          }
          p {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 31px;
            text-align: center;
            color: rgba(58, 61, 66, 0.9);
          }
        }
      }
    }
  }
  /* END = USERS  SECTION */

  /* START = FOOTER  SECTION */
  footer {
    background: #6379f4;
    padding-top: 80px;
    .logo {
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 49px;
      color: #ffffff;
      margin-bottom: 30px;
    }
    .text {
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 31px;
      color: rgba(239, 239, 239, 0.75);
    }
    .divider {
      background-color: rgba(239, 239, 239, 0.75);
      width: 100%;
      height: 2px;
      margin-top: 50px;
      margin-bottom: 30px;
    }
    .contact {
      display: flex;
      justify-content: space-between;
      .contact-email {
        display: flex;
      }
    }
  }
  /* END = FOOTER  SECTION */
`;
