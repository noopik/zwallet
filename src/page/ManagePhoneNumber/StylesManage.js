import styled from "styled-components";
export const StylesManage = styled.div`
 padding: 30px;
 .text-wrapper{
    padding-left: 30px;
    padding-top: 30px;
    }
 .card-section{
    height: 92px;
    margin-top: 20px;
    margin-left: 30px;
    }
.card-wrapper{
    height: 500px;
}
.contact{
    display: flex;
    justify-content: space-between;
      
  }
  .title-wrapper{
    margin-top: 3px;
    margin-left: 15px;
    width: 250px;
  }
  .title{
    padding-top: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #7A7886;
  }
  .sub-title{
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    
  }
  .button-right{
    margin-top: 15px;
    margin-right: 20px;
    /* margin-top: 35px; */
  }
  .btn{
    outline: none;
    border: none;
    padding: 12px 16px;
    cursor: pointer;
  }
  .contact:hover{
    transform: scale(1.05);
    transition: all .2s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  } 

`