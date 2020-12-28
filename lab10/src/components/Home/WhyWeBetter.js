import React from "react";
import {
  BetterWrapper,
  BetterTitle,
  BetterContainer,
  BetterFeedback,
  BetterSubTitle,
  OurLawyer,
  Benefit,
  LawyerImage,
} from "./WhyWeBetter.styled";
import lawyer1 from "../../images/lawyer1.jpg";

const WhyWeBetter = () => {
  return (
    <>
      <BetterWrapper>
        <BetterTitle>
          <h1>MARITIME INJURY LAWYERS</h1>
        </BetterTitle>
        <BetterSubTitle>
          <h2>THE ONLY FIRM GOOD ENOUGH FOR YOU</h2>
        </BetterSubTitle>
        <BetterContainer>
          <BetterFeedback>
            <OurLawyer>Arnold Kovalski</OurLawyer>
            <Benefit>
              Experience: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Works: Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Study:Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit ame.
            </Benefit>
          </BetterFeedback>
          <LawyerImage src={lawyer1} />
        </BetterContainer>
      </BetterWrapper>
    </>
  );
};

export default WhyWeBetter;
