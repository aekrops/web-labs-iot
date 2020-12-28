import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Wrapper, BackBtn, Info, BuyBtn } from "./ItemInfo.styled";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";

function ItemInfo(props) {
  var lawyers = props.data;
  const key = window.location.pathname.split("/").pop();
  var selectedLawyer = lawyers.filter((itemSelected) =>
    itemSelected.key.includes(key)
  );

  return selectedLawyer.map((lawyer) => (
    <Wrapper>
      <BackBtn>
        <Link to="/catalog">Back</Link>
      </BackBtn>
      <Card
        style={{
          width: "18rem",
          height: "580px",
          marginLeft: "24px",
          backgroundColor: "#B7D4FF",
        }}
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
              Per service: {lawyer.val().pricePerHourInDollars}$
            </Card.Text>
            <Card.Text>Rating: {lawyer.val().rating} ☆</Card.Text>
            <BuyBtn
              onClick={() => {
                props.addToCart(lawyer.val().key);
              }}
            >
              Order a service
            </BuyBtn>
          </>
        </Card.Body>
      </Card>
      <Info>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus
        fermentum ligula ultricies dictum. Donec justo metus, posuere eu leo ac,
        vestibulum luctus mi. Donec sit amet risus congue urna maximus dapibus.
      </Info>
    </Wrapper>
  ));
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (key) => dispatch(addToCart(key)),
  };
};

export default connect(null, mapDispatchToProps)(ItemInfo);
