import React from "react";
import { Card } from "react-bootstrap";
import { Cards } from "./ServiceCard.styled";
import ViewMoreButton from "./ViewMoreButton";
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../services/Service";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import ItemInfo from "../Catalog/ItemInfo";
import "./style.css";

function ServiceCard(props) {
  let [tutorials, setTutorials] = useList(TutorialDataService.getAll());
  console.log(tutorials);
  return (
    <Cards>
      <BrowserRouter>
        <Route path={["/catalog/info/"]}>
          <ItemInfo items={tutorials} />
        </Route>
        <Route exact path={["/catalog"]}>
          <ul className={"grid-list"}>
            {!setTutorials &&
              tutorials &&
              tutorials.map((tutorial) => (
                <Card
                  style={{
                    width: "18rem",
                    height: "550px",
                    marginLeft: "24px",
                    backgroundColor: "#B7D4FF",
                  }}
                  key={props.id}
                >
                  <Card.Img variant="top" src={tutorial.val().image} />
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <Card.Title>{tutorial.val().name}</Card.Title>
                      <Card.Text>Services:{tutorial.val().services}</Card.Text>
                      <Card.Text>
                        Price:{tutorial.val().pricePerHourInDollars} per hour
                      </Card.Text>
                      <Card.Text>Rating:{tutorial.val().rating}/5</Card.Text>
                      <a href={"catalog/info/" + tutorial.key}>View more</a>
                    </div>
                  </Card.Body>
                </Card>
              ))}
          </ul>
        </Route>
      </BrowserRouter>
    </Cards>
  );
}

export default ServiceCard;
