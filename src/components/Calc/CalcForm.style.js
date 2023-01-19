import styled from "styled-components";

export const CalcForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 56px;
  width: 50%;

  h1 {
    font-size: 24px;
    margin-top: 40px;
    color: rgba(101, 101, 101, 1);
  }

  h3 {
    font-size: 14px;
    margin-top: 22px;
    margin-right: auto;
    font-weight: 500;
    color: rgba(101, 101, 101, 1);
  }

  input {
    border-color: rgba(221, 230, 233, 1);
    border-radius: 5px;
    height: 40px;
    margin-top: -13px;
  }

  p {
    font-size: 10px;
    font-weight: bolder;
    margin-right: auto;
    margin-top: 1px;
    color: rgba(206, 206, 206, 1);
  }

  .input_mdr {
    margin-bottom: 40px;
  }
  button {
    border: none;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px;
    background-color: rgba(93, 156, 236, 1);
    color: white;
    font-weight: bolder;
  }

  button:hover {
    background-color: rgba(61, 117, 187, 1);
  }
`;
