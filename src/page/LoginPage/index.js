import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, FieldWithIcon, SidebarAuth } from '../../components'
const LoginPage = () => {
    return (
        <Styles>
        <>
            <div className="wrapper">
                <div className="row-side">
                <SidebarAuth className="sidebar"/>
                </div>


                <div className="form-side">
                        <h5>
                        Start Accessing Banking Needs<br/>
                        With All Devices and All Platforms<br/>
                        With 30.000+ Users<br/>
                        </h5>
                        <h6>
                        Transfering money is eassier than ever, you can access <br/>
                         Zwallet wherever you are. Desktop, laptop, mobile phone?<br/>
                          we cover all of that for you!
                        </h6>

                        <FieldWithIcon
                            type="text" 
                            className="field"
                            icon="fa fa-envelope-o"
                            placeholder="Enter your e-mail"
                        />
                         <FieldWithIcon 
                            type="password"
                            className="field"
                            icon="fa fa-lock"
                            placeholder="Enter your password"
                        />
                    <div className="forgot-pass">
                        <Link to="" style={{ textDecoration: 'none', color: '#3A3D42' }}>Forgot password?</Link>
                    </div>
                    <Button children="Login" className="button-login"/>
                    <div className="register-link">
                        Don't have an account ? Let's<Link to="/signup"  classname="link" style={{ textDecoration: 'none' }}> Sign Up </Link>
                    </div>
                </div>
            </div>
            </>
        </Styles>
    )
}

export default LoginPage
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
