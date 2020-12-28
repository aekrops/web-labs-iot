import React, { useState } from "react";
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
  MoreInfo,
} from "./AboutUs.styled";

const AboutUs = () => {
  const [isTruncated, setIsTruncated] = useState(false);
  const text =
    'Law firms are organized in a variety of ways, depending on the jurisdiction in which the firm practices. Common arrangements include:Sole proprietorship, in which the attorney is the law firm and is responsible for all profit, loss and liability;General partnership, in which all the attorneys who are members of the firm share ownership, profits and liabilities;Professional corporations, which issue stock to the attorneys in a fashion similar to that of a business corporation;Limited liability company, in which the attorney-owners are called "members" but are not directly liable to third party creditors of the law firm (prohibited as against public policy in many jurisdictions but allowed in others in the form of a "Professional Limited Liability Company or PLLC) Professional association, which operates similarly to a professional corporation or a limited liability company; Limited liability partnership (LLP), in which the attorney-owners are partners with one another, but no partner is liable to any creditor of the law firm nor is any partner liable for any negligence on the part of any other partner. The LLP is taxed as a partnership while enjoying the liability protection of a corporation.';

  const resultText = !isTruncated ? text.slice(0, 100) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTruncated);
  }

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
        <MoreInfo>
          <br />
          {resultText}
          <LearnMore onClick={toggleIsTruncated}>
            {isTruncated ? "View less" : "View more"}
          </LearnMore>
        </MoreInfo>
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
