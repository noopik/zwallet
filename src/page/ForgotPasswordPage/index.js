import React from 'react'
import styled from 'styled-components'
import { Button, FieldWithIcon, SidebarAuth } from '../../components'

const ForgotPasswordPage = () => {
    return (
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
                    Now you can create a new password for your Zwallet <br />
                    account. Type your password twice so we can confirm your <br />
                    new passsword.
                    </h6>

                    <FieldWithIcon 
                        type="password"
                        className="field"
                        name="password"
                        value=""
                        icon="fa fa-lock"
                        placeholder="Create new password"
                    />
                     <FieldWithIcon 
                        type="password"
                        className="field"
                        name="password"
                        value=""
                        icon="fa fa-lock"
                        placeholder="Create new password"
                    />
                <Button children="Reset password" className="button-login"/>
    
            </div>
        </div>
        
    </Styles>
    )
}

export default ForgotPasswordPage
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