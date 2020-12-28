import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  height: 635px;
`;

export const BackBtn = styled.button`
  width: 5rem;
  height: 2rem;
  border-style: none;
  border: #b7d4ff 1px solid;
  color: #b7d4ff;
  background-color: #5199ff;

  &:hover {
    transform: scale(1.11);
  }
`;

export const Info = styled.p`
  width: 18rem;
  letter-spacing: 5px;
  color: #b7d4ff;
  margin-left: 5px;
`;

export const BuyBtn = styled.button`
  width: 16rem;
  height: 30px;
  background-color: #0043a4;
  color: #b7d4ff;
  border-style: none;

  &:hover {
    background-color: #b7d4ff;
    color: #0043a4;
    border: #0043a4 1px solid;
  }

  &:active {
    color: #b7d4ff;
    background-color: #0043a4;
    border-style: none;
  }
`;
