import styled from 'styled-components'
export const StyleStatus = styled.div`
padding: 30px;
    .status-header{
        height: 100px;
        width: 500px;
        margin-left: auto;
        margin-right: auto;
    }
    .success-img{
        margin-top: 60px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .status-name{
        margin-top: 15px;
        margin-bottom: 10px
    }
    .fail-img{
        margin-top: 14px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
    .card-section{
        height: 92px;
        margin-top: 20px;
    }
    .card-section-first{
        height: 92px;
        margin-top: 120px;
    }
    .card-profile{
        height: 110px;
        padding-top: 20px;
        margin-top: 25px;
    }
    .success-stat{
        margin-top: 30px;
        font-weight: bold;
        font-style: normal;
        font-size: 22px;
        line-height: 30px;
        text-align: center;
        color: #4D4B57;
    }
    .failed-stat{
        font-weight: bold;
        font-style: normal;
        font-size: 22px;
        line-height: 30px;
        text-align: center;
        color: #4D4B57;
        top: 0;
    }
    .fail-message{
        text-align: center;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        color: #7A7886;
        margin-top: 20px;

    }
    .title{
    padding-left: 15px;
    padding-top: 15px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #7A7886;
    }
    h4{
    padding-left: 15px;
    /* padding-top: 10px; */
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;  
    color: #514F5B;
    }
    .text-transfer{
        padding-top: 40px;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #514F5B;
    }   
    .wrapper-profile{
        display: flex;
        flex-direction: row;
    }
    .image-wrapper{
        background: #adadad;
        width: 70px;
        height: 70px;
        margin-left: 20px;
        border-radius: 10px;
    }
    .image-wrapper img{
        width: 100%;
    }
    .detail-profile-wrap{
        padding-top: 10px;
        margin-left: 20px;
        height: 69px;
        width: 200px;
    }
    .text-name{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #4D4B57;
    }
    .button-wrap{
        margin-top: 90px;
        display: flex; 
        justify-content: flex-end;
    }

    .share-button{
        background: rgba(99, 121, 244, 0.15);
        box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
        border-radius: 12px;
        width: 57px;
        height: 57px;
        border: none;
        outline: none;
    }
    .download-button{
        margin-left: 30px;
        background: rgba(99, 121, 244, 0.15);
        box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
        border-radius: 12px;
        width: 243px;
        height: 57px;
        padding-left: 30px;
        cursor: pointer;
    }
    .download-button button{
        border: none;
        outline: none;
        background: none;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;  
        color: #6379F4;
        padding-top: 16px;
        padding-left: 15px;
    }
    .download-icon{
    
        width: 22px;
        height: 22px;
    }
    .button-back{
        margin-left: 20px;
        width: 197px;
        height: 57px;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
    }
    .download-button:hover,
    .share-button:hover{
        background: #D0D6FC;
    }
`