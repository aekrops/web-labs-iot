import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

export const CardsWrapper = styled.div`
  height: 680px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 15px;
`;

export const ListOfCards = styled.ul`
  height: 100%;
  width: 70%;
  display: flex;
  flex-wrap: wrap;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Plus = styled(AiOutlinePlusCircle)``;

export const Minus = styled(AiOutlineMinusCircle)``;

export const Trash = styled(BsTrash)``;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background: transparent;
`;

export const OrderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: end;
`;

export const BuyBtn = styled.button`
  width: 35px;
  background: transparent;
  border: none;
`;
