import React from "react";
import {
  Container,
  AboutUsTitle,
  AboutUsInfo,
  Title,
  Info,
  LearnMore,
  AboutUsList,
  Card,
  CardTitle,
  CardInfo,
  Separator,
} from "./AboutUs.styled";
const AboutUs = () => {
  return (
    <Container>
      <AboutUsTitle>
        <h1>About Us</h1>
      </AboutUsTitle>
      <AboutUsInfo>
        <Title>Quinn Emanuel Urquhart and Sullivan, LLP</Title>
        <Info>
          is a 800+ attorney business litigation firm with 23 offices around the
          globe, each devoted solely to business litigation and arbitration.
        </Info>
        <LearnMore>Learn more about the firm</LearnMore>
      </AboutUsInfo>
      <AboutUsList>
        <Card color={"#2300B0"}>
          <CardTitle>2300+</CardTitle>
          <CardInfo>Trials and arbitrations</CardInfo>
        </Card>
        <Card color={"#2E3F7F"}>
          <CardTitle>$70b+</CardTitle>
          <CardInfo>Won for Plaintiffs</CardInfo>
        </Card>
        <Card color={"#242240"}>
          <CardTitle>88%</CardTitle>
          <CardInfo>Trials and Arbitrations won</CardInfo>
        </Card>
        <Card color={"#002D6D"}>
          <CardTitle>23</CardTitle>
          <CardInfo>Offices in 10 countries</CardInfo>
        </Card>
      </AboutUsList>
      <Separator></Separator>
    </Container>
  );
};

export default AboutUs;
