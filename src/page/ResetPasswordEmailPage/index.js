import React from 'react'
import styled from 'styled-components'
import { Button, FieldWithIcon, SidebarAuth } from '../../components'

const ResetPasswordEmailPage = () => {
    return (
        <div>
              <Styles>
        
        <div className="wrapper">
            <div className="row-side">
            <SidebarAuth className="sidebar"/>
            </div>


            <div className="form-side">
                    <h5>
                    Did You Forgot Your Password? <br />
                    Don’t Worry, You Can Reset Your <br />
                    Password In a Minutes. <br />
                    </h5>
                    <h6>
                    To reset your password, you must type your e-mail and we <br />
                    will send a link to your email <br />
                    and you will be directed to the reset password screens. <br />
                    </h6>

                    <FieldWithIcon 
                        type="text"
                        className="field"
                        name=""
                        value=""
                        icon="fa fa-envelope"
                        placeholder="Enter your e-mail"
                    />
            
                <Button children="Confirm" className="button-login"/>
    
            </div>
        </div>
        
    </Styles>
        </div>
    )
}

export default ResetPasswordEmailPage
const Styles = styled.div`
.wrapper{
        display: flex;
        /* background: orange; */
        
        .row-side{
            height: 100%;
            width: 69%;
            /* background-color: black; */
        }
        .sidebar{
            width: 100%;
        }
        
        .form-side{
            height: 69%;
            width: 50%;
            /* background-color: red; */
            h5{
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 33px;
                color: #3A3D42;
                margin-top: 120px;
            }
            h6{
                font-style: normal;
                margin-top: 30px;
                font-weight: normal;
                font-size: 16px;
                line-height: 30px;
                color: rgba(58, 61, 66, 0.6);
            }
            .field{
                margin-top: 30px;
                width: 100%;
            }
            .forgot-pass{
                margin-top: 20px;
                /* text-align-last: right; */
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                margin-left: 53%;
                
            }
            .link:hover{
                color: coral;
                
            }
            .button-login{
                margin-top: 80px;
                /* margin: 0 auto; */
            }
            .register-link{
                margin-top: 40px;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 23px;
                margin-left: 9.5%;
                color: rgba(58, 61, 66, 0.8);
            }
        }
    }


`