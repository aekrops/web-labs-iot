import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: #7ab1ff;
  color: #e5f0ff;
  border-style: none;
  height: 30px;

  &:hover {
    background-color: #4a69ff;
  }

  &:active {
    background-color: #2300b0;
  }
`;
