import styled from "styled-components"

export const StyledAdmin = styled.div`
.card-header{
    background-color: #6379F4;
    padding: 30px;
    height: 190px;
    width: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    .status-transaction{
        width: 200px;
            .text-section {
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                color: #E0E0E0;
             }
           .balance-amount {
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 55px;
                color: #ffffff;
            }
    }
    .amount-transaction{
        gap: 1rem;
        margin-left: 15px;
        width: 200px;
        .text-section {
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                color: #E0E0E0;
             }
           .balance-amount {
            
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 55px;
                color: #ffffff;
            }
    }
    .user-verified{
        gap: 1rem;
        margin-left: 15px;
        width: 200px;
        .text-section {
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                color: #E0E0E0;
             }
           .balance-amount {
            
                font-family: Nunito Sans;
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 55px;
                color: #ffffff;
            }
    }
}
  
.content-wrapper{
      padding: 20px;
      margin-top: 25px;
      .text-wrapper{
        padding-left: 15px;
        padding-top: 30px;
    }
      .card-profile {
        height: 110px;
        padding-top: 20px;
        margin-top: 25px;
     }
        .wrapper-profile {
        display: flex;
        flex-direction: row;
    }
    .image-wrapper {
        background: #adadad;
        width: 70px;
        height: 70px;
        margin-left: 20px;
        border-radius: 10px;
    }
    .image-wrapper img {
        width: 100%;
    }
    .detail-profile-wrap {
        padding-top: 10px;
        margin-left: 20px;
        height: 69px;
        /* width: 200px; */
    }
    .text-name {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #4d4b57;
    }
    .detail{
        font-size: 15px;
        line-height: 22px;
        color: #7A7886
    }
    .detail b{
        color: #6adc99 ;
    }
    .status-transfer{

        margin-top: 30px;
        text-align-last: right;
        margin-left: 85px;
        
    }
    .status-transfer mark{
        border-radius: 5px;
        background-color: #d8e4ef ;
        color: #19ae02 ;
    }
    .failed mark{
        border-radius: 5px;
        background-color: #d8e4ef ;
        color: red ;
    }
    .pending mark{
        border-radius: 5px;
        background-color: #d8e4ef ;
        color: #e743af;
    }
    .account:hover{
    transform: scale(1.05);
    transition: all .2s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  }
  }

`