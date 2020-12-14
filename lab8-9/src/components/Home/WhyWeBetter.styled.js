import styled from "styled-components";

export const BetterWrapper = styled.div`
  margin-top: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BetterTitle = styled.div`
  font-size: 35px;
  color: #052555;
`;

export const BetterSubTitle = styled.div`
  font-size: 24px;
  color: #002d6d;
  padding-bottom: 35px;
`;

export const BetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #002d6d;
`;

export const BetterFeedback = styled.div`
  width: 700px;
`;

export const OurLawyer = styled.div`
  padding-bottom: 20px;
  font-size: 24px;
`;

export const Benefit = styled.div`
  font-size: 21px;
  padding-right: 45px;
`;

export const LawyerImage = styled.img`
  src: url(${(props) => props.src});
`;
