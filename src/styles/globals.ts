import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:#fff;
    -webkit-font-smoothing:antialiased;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }

  .container{
    height:100%;
    width:100%;
    min-height:100vh;
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:space-between;
    
    header{ 
      background-color:#054A91;
      width:100%;
      height:87px;
      display:flex;
      align-items:center;
      justify-content:center;

      img{
        height:80px;
        width:auto;
      }
    }
    
    main{
      display:flex;
      flex:1;
      align-items:center;
      justify-content:center;
    }

    footer{
      bottom:0;
      background-color:#054A91;
      width:100%;
      height:87px;
      display:flex;
      text-align:center;
      padding-left:20px;
      padding-right:20px;
      align-items:center;
      justify-content:center;
      
      p{
        font: 12px Roboto, sans-serif;
        letter-spacing: 0px;
        color: #DAE3ED;
      }
    }
  }

`;