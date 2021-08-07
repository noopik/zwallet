import React from 'react'
import styled from 'styled-components'
import { SidebarAuth, Button, } from '../../components'
import { Success } from '../../assets'

const SuccessPinPage = () => {
    return (
        <Styles>
                 <div className="wrapper">
                
                <div className="row-side">
                  <SidebarAuth className="sidebar"/>
                </div>

                <div className="form-side">
                    <div className="image">
                         <img src={Success} alt="" />
                    </div>
                    <h5>
                    Your PIN Was Successfully Created
                    </h5>
                    <h6>
                    Your PIN was successfully created and you can now access <br/>
                    all the features in Zwallet. Login to your new account and <br/>
                    start exploring!
                    </h6>
                    <Button name="Login" className="button-login"/>
                </div>
            </div>
        </Styles>
    )
}

export default SuccessPinPage
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
                margin-top: 76px;
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
            .image{
                margin-top: 121px;
            }
        }
    }
`
