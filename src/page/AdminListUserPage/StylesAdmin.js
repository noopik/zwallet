import styled from "styled-components";

export const StylesAdmin = styled.div`

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
       
        padding-top: 30px;
    }
    .search-section {
        margin-bottom: 50px;
        background: rgba(58, 61, 66, 0.1);
        border-radius: 12px;
        box-sizing: content-box;
        padding: 15px;
        display: flex;
        gap: 1rem;
        &:hover {
        cursor: pointer;
        opacity: 0.7;
        }
        .icon {
        }
        form {
        width: 100%;
        .input-search {
            width: 100%;
            height: 23px;
            border: 0;
            background-color: transparent;
            &:focus {
            outline: none;
            }
        }
        }
    }
    .body-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* background-color: green; */
  }

}
`