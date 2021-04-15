import styled from 'styled-components';

export const Container = styled.div`
  max-width:420px;
  width:100%;
  height:100%;
  margin-top:40px;
  margin-bottom:78px;

  @media(max-width:912px){
    margin:20px;
  }

  form{
    width:100%;
    max-width:420px;
  }
  .form_row + .form_row{
    margin-top:17px;
  }

  .form_row{
    display:flex;
    width:100%;

    .form_input + .form_input{
      margin-left:24px;
    }

    .form_input{
      label{
        color: #1D1D1D;
        font-family:Roboto, sans-serif;
        font-family:14px;
        letter-spacing: 0px;
        font-weight:500;
        margin-bottom:4px;
      }

      input{
        width:198px;
        height:40px;
        border: 1px solid #707070;
        border-radius: 5px;
        padding:12px;

        font-family:Roboto, sans-serif;
        font-family:14px;
        letter-spacing: 0px;
        color: #707070;
      }

      input[type="date"] {
        -webkit-appearance: none;
      }
      input[type="date"]::-webkit-inner-spin-button,
      input[type="date"]::-webkit-calendar-picker-indicator {
          display: none;
          -webkit-appearance: none;
      }
      
      select{
        width:198px;
        height:40px;
        border: 1px solid #707070;
        border-radius: 5px;
        padding:12px;

        font-family:Roboto, sans-serif;
        font-family:14px;
        letter-spacing: 0px;
        color: #707070;
        padding-right:15px;
      }

      span{
        color:red;
        font-size:12px;
        margin-top:2px;
      }
    }
  }

  .container_buttons{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;

    margin-top:40px;

    .buttons{
      width:198px;
      display:flex;
      align-items:center;
      justify-content:flex-end;

      button + button{
        margin-left:24px;
      }

      button{
        width:87px;
        height:33px;
        background: #DAE3ED 0% 0% no-repeat padding-box;
        border: 1px solid #1D1D1D;
        border-radius: 5px;

        font-family:Roboto, sans-serif;
        font-size:14px;
        letter-spacing: 0px;
        color: #1D1D1D;
        text-transform: uppercase;

        &:hover{
          background-color:#1D1D1D;
          color:#fff;
        }
      }
    }
  }

  @media(max-width:420px){

    .form_row{
      display:block;
      width:100%;

      .form_input + .form_input{
        margin-top:17px;
        margin-left:0;
      }

      .form_input{
        input{
          width:100%;
        }
        select{
          width:100%;
        }
        span{
          color:red;
          font-size:12px;
          margin-top:2px;
        }
      }
    }
  }
`;

export const Header = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:32px;

  h1{
    font-size:24px;
    font-family:Roboto, sans-serif;
    font-weight:500;
    letter-spacing: 0px;
    color: #1D1D1D;
  }
`;