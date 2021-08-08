import React from 'react'
import styled from 'styled-components'
import { Button, FieldToken, SidebarAuth } from '../../components'
const CreatePinPage = () => {
    return (
        <Styles>
            <div className="wrapper">
                
                <div className="row-side">
                  <SidebarAuth className="sidebar"/>
                </div>

                <div className="form-side">
                    <h5>
                    Secure Your Account, Your Wallet,<br/>
                    and Your Data With 6 Digits PIN<br/>
                    That You Created Yourself.
                    </h5>
                    <h6>
                        Transfering money is eassier than ever, you can access <br/>
                         Zwallet wherever you are. Desktop, laptop, mobile phone?<br/>
                          we cover all of that for you!
                        </h6>
                    <div className="token-field">
                        
                         <FieldToken className="pin" name="pin" value=""/>
                         <FieldToken className="pin" name="pin" value=""/>
                         <FieldToken className="pin"name="pin"value=""/>
                         <FieldToken className="pin"name="pin"value=""/>
                         <FieldToken className="pin"name="pin"value=""/>
                          
                    
                    </div>
                    <Button children="Confirm" className="button-login"/>
                </div>
            </div>
        </Styles>
    )
}

export default CreatePinPage
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
            .link:hover{
                color: coral;
                
            }
            .button-login{
                margin-top: 80px;
                /* margin: 0 auto; */
            }
            .token-field{
                display: flex;
                flex-direction: row;
            }
            .pin{
                padding-left: 20px;
            }
        }
    }


`
