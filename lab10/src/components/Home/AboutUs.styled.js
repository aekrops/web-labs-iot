import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 75px;
`;

export const AboutUsTitle = styled.div`
  padding-top: 100px;
  padding-bottom: 75px;
  font-size: 40px;
  color: #011b56;
`;

export const AboutUsInfo = styled.div`
  background-color: #011b56;
  color: white;
  padding: 25px 25px 25px 25px;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 24px;
`;

export const Info = styled.div`
  font-size: 18px;
`;

export const LearnMore = styled.span`
  background-color: #5199ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 45px;
  border-radius: 15px;
  margin-top: 25px;
  border-style: none;
  font-size: 16px;
  color: white;
  text-decoration: none;

  &:hover {
    transform: scale(1.11);
    border: 2px solid #011b56;
  }

  &:active {
    background-color: #2e3f7f;
  }
`;

export const AboutUsList = styled.div`
  display: flex;
  margin-top: 35px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
  background-color: ${(props) => props.color};
  height: 100px;
  width: 300px;
  border-radius: 10px;
  color: white;
`;

export const CardTitle = styled.div`
  font-size: 33px;
  padding-top: 15px;
`;

export const CardInfo = styled.div`
  padding-top: 10px;
  padding-bottom: 15px;
  font-size: 20px;
`;

export const Separator = styled.div`
  height: 50px;
`;

export const MoreInfo = styled.p``;
