import styled from "styled-components";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

export const FooterContainer = styled.div`
  background-color: #011b56;
  height: 70px;
  width: 100%;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  right: 0;
  left: 0;
  color: white;
  z-index: 100;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 75px;
`;

export const FooterText = styled.div`
  width: 500px;
  font-size: 24px;
  margin-left: 12rem;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: 350px;
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
  margin-left: 0.5rem;
`;

export const TwitterIcon = styled(AiFillTwitterSquare)`
  margin-left: 0.5rem;
`;

export const FacebookIcon = styled(AiFillFacebook)`
  margin-left: 0.5rem;
`;
