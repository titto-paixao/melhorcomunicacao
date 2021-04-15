import styled from 'styled-components';

export const Container = styled.div`
  max-width:912px;
  width:100%;
  height:100%;
  margin-top:40px;
  margin-bottom:78px;

  padding:24px;

  @media(max-width:912px){
    margin:20px;
  }

  .length{
    max-width:912px;
    width:100%;
    height:64px;
    border: 1px solid #1D1D1D;
    border-top:0;
    display:flex;
    align-items:center;
    justify-content:center;

    font-size:24px;
    font-family:Roboto, sans-serif;
    font-weight:500;
    letter-spacing: 0px;
    color: #1D1D1D;
  }
`;

export const Header = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;

  h1{
    font-size:24px;
    font-family:Roboto, sans-serif;
    font-weight:500;
    letter-spacing: 0px;
    color: #1D1D1D;
  }

  button{
    width:155px;
    height:40px;
    background: #DAE3ED 0% 0% no-repeat padding-box;
    border: 1px solid #1D1D1D;
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:center;

    font-family:Roboto, sans-serif;
    font-size:14px;
    font-weight:500;
    letter-spacing: 0px;
    color: #1D1D1D;
    text-transform: uppercase;

    transition:transform 0.2s;

    &:hover{
      padding:10px;
      background-color:#1D1D1D;
      color:#fff;
      width:159px;
      svg{
        path{
          color:#fff;
        }
      }
    }

  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  margin-top:12px;

  thead, tbody{
    font-size:14px;
    font-family:Roboto, sans-serif;
    color: #1D1D1D;
  }

  .icons{
    min-width:100px;
    text-align:right;

    .icon{
      margin-right:32px;
      cursor:pointer;
    }
  }

  th {
    text-align: left;
  }

  tr{
    border: 1px solid #1D1D1D;
    height:64px;
  }
    
  td, th {
    padding: 1em .5em;
    vertical-align: middle;
  }
    
  @media all and (max-width: 768px) {
    display: block;

    position: relative; 
    padding-bottom: 0;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    
    thead, tbody, th, td, tr {
      display: block;
    }

    tr{
      height: 100%;
    }
    
    th {
      text-align: right;
    }
    
    thead {
      float: left;
      white-space: nowrap;
    }
    
    tbody {
      overflow-x: auto;
      overflow-y: hidden;
      position: relative;
      white-space: nowrap;
    }
    
    tr {
      display: inline-block;
      vertical-align: top;
    }
    
    th {
      border-bottom: 1px solid #a39485;
    }
    
    td {
      border-bottom: 1px solid #e5e5e5;
    }
  }
`;
