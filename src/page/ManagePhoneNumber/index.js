import React from 'react'
import { StylesManage } from './StylesManage'
import { Cardwrapper, HeadingContent, SmallCard } from '../../components'
import { TrashIcon } from '../../assets'

const ManagePhoneNumber = () => {
    return (
        <Cardwrapper>

        <StylesManage>
            <div className="text-wrapper">
                <HeadingContent>Manage Phone Number</HeadingContent>
                <p className="text-regular">
                You can only delete the phone number and then <br />
                you must add another phone number.</p>
            </div>
        <div className="card-wrapper">

          <SmallCard className="card-section contact">
            <div className="title-wrapper">
                <p className="title">Primary</p>
                <p className="sub-title">+62 813 9387 7946</p>
            </div>
            <div className="button-right">
                <button className="btn">
                   <img className="image" src={TrashIcon} alt="" />
                </button>
            </div>
         </SmallCard>

        </div>
        </StylesManage> 
        </Cardwrapper>
    )
}

export default ManagePhoneNumber
