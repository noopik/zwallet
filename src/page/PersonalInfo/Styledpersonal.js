import styled from "styled-components";

export const Styledpersonal = styled.div`
  padding: 30px;
    .text-wrapper{
        padding-left: 30px;
        padding-top: 30px;
    }
    .card-section-first {
        height: 92px;
        margin-top: 30px;
        margin-left: 30px;
     }
    .card-section{
        height: 92px;
        margin-top: 20px;
        margin-left: 30px;
    }
    .title {
    padding-left: 15px;
    padding-top: 15px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #7a7886;
  }
  h4 {
    padding-left: 15px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #514f5b;
  }
  .contact{
      display: flex;
      justify-content: space-between;
      
  }
  .contact-wrapper{
    margin-top: 3px;
    margin-left: 15px;
    width: 250px;
  }
  .text-right{

    margin-top: 15px;
    text-align-last: right;
    height: 75px;
    margin-right: 20px;
    margin-top: 35px;

  }
  .contact:hover{
    transform: scale(1.05);
    transition: all .2s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
  }
  .manage{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #6379F4
  }
  .manage:hover {
  transition: all .2s ease;
}
`
