import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Cards, ListOfCards, CardsWrapper } from "./ServiceCard.styled";
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../services/Service";
import { BrowserRouter, Route } from "react-router-dom";
import ItemInfo from "../Catalog/ItemInfo";
import {
  Wrapper,
  SelectionWrapper,
  Option,
  Selection,
  FilterWrapper,
  FilterInput,
  ApplyButton,
} from "./ControlPanel.styled";
import "../Catalog/loading.css";

function ServiceCard(props) {
  let [data, loading] = useList(TutorialDataService.getAll());
  const [service, setService] = useState("");
  const [name, findByName] = useState("");
  const [photo, havePhoto] = useState("");

  data = data.filter((lawyer) => lawyer.val().services.includes(service));
  data = data.filter((lawyer) => lawyer.val().name.includes(name));
  data = data.filter((lawyer) => lawyer.val().image.includes(photo));

  return (
    <>
      <Wrapper>
        <SelectionWrapper color="#052555">
          Filter by
          <Selection onChange={(event) => setService(event.target.value)}>
            <Option></Option>
            <Option value="Advice">Advice</Option>
            <Option value="Representation in Court">
              Representation in Court
            </Option>
            <Option value="Check documents">Check Documents</Option>
          </Selection>
          <Selection onChange={(event) => havePhoto(event.target.value)}>
            <Option></Option>
            <Option value="https:">have photo</Option>
            <Option value="nema">have not photo</Option>
          </Selection>
        </SelectionWrapper>
        <FilterWrapper>
          <FilterInput
            id="lawyerName"
            placeholder="Enter name of lawyer"
            onChange={(event) => findByName(event.target.value)}
          ></FilterInput>
          <ApplyButton>Apply</ApplyButton>
        </FilterWrapper>
      </Wrapper>
      {loading && <div class="loader">Loading...</div>}
      <CardsWrapper>
        <Cards>
          <BrowserRouter>
            <Route path={"/catalog/info/"}>
              <ItemInfo data={data} />
            </Route>
            <Route exact path={"/catalog"}>
              <ListOfCards>
                {data.map((lawyer) => (
                  <Card
                    style={{
                      width: "18rem",
                      height: "550px",
                      marginLeft: "24px",
                      backgroundColor: "#B7D4FF",
                    }}
                    key={lawyer.key}
                  >
                    <Card.Img variant="top" src={lawyer.val().image} />
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <>
                        <Card.Title>{lawyer.val().name}</Card.Title>
                        <Card.Text>Services: {lawyer.val().services}</Card.Text>
                        <Card.Text>
                          Price: {lawyer.val().pricePerHourInDollars}$ per hour
                        </Card.Text>
                        <Card.Text>Rating: {lawyer.val().rating}/5</Card.Text>
                        <a href={"catalog/info/" + lawyer.key}>View more</a>
                      </>
                    </Card.Body>
                  </Card>
                ))}
              </ListOfCards>
            </Route>
          </BrowserRouter>
        </Cards>
      </CardsWrapper>
    </>
  );
}

export default ServiceCard;
