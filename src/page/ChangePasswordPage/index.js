import { Input } from '@material-ui/core'
import React from 'react'
import { Cardwrapper, HeadingContent, Button } from '../../components'
import { StyledChange } from './StyledChange'

const ChangePasswordPage = () => {
    return (
        <Cardwrapper>
            <StyledChange>

                <div className="text-wrapper">
                    <HeadingContent>Change Password</HeadingContent>
                    <p className="text-regular">
                    You must enter your current password and then <br />
                    type your new password twice.</p>
                 </div>
                 <div className="form-field">
                     <form action="">
                         <Input 
                         type="password"
                         name="password"
                         value=""
                         placeholder="current password"
                         icon=""
                         className="input-password" ></Input>
                        
                        <Input 
                         type="password"
                         name="password"
                         value=""
                         placeholder="New password"
                         icon=""
                         className="input-password-sec" ></Input>

                        <Input 
                         type="password"
                         name="password"
                         value=""
                         placeholder="Repeat new password"
                         icon=""
                         className="input-password-sec" ></Input>

                        <Button
                            className="button-change"
                            primary="primary"
                            children="Change Password"
                        />
                     </form>
                 </div>

            </StyledChange>
        </Cardwrapper>
    )
}

export default ChangePasswordPage
