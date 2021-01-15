import { Card } from "react-bootstrap";
import {
  CardsWrapper,
  Cards,
  ListOfCards,
  QuantityWrapper,
  Plus,
  Minus,
  Container,
  Button,
  Trash,
  OrderWrapper,
  BuyBtn,
} from "./Cart.styled";
import { connect } from "react-redux";
import "../Catalog/loading.css";
import { removeFromCart, editQuantity } from "../../redux/actions";
import Order from "../Order/Order";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Cart({ cart, removeFromCart, editQuantity }) {
  var totalLawyers = 0;
  var totalPrice = 0;
  cart.forEach((lawyer) => {
    totalPrice += lawyer.quantity * lawyer.pricePerHourInDollars;
    totalLawyers += lawyer.quantity;
  });

  return (
    <>
      <BrowserRouter>
        <Route exact path={"/cart"}>
          <OrderWrapper>
            <Card
              style={{
                width: "30rem",
                height: "65px",
                marginLeft: "24px",
                backgroundColor: "#B7D4FF",
              }}
            >
              <Card.Body
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-around",
                }}
              >
                <p>
                  Total price: {totalPrice} | Total items: {totalLawyers}
                </p>
                <BuyBtn>
                  <Link to={"/cart/order"}>Buy</Link>
                </BuyBtn>
              </Card.Body>
            </Card>
          </OrderWrapper>
          <CardsWrapper>
            <Cards>
              <ListOfCards>
                {cart.map((lawyer) => (
                  <Card
                    style={{
                      width: "18rem",
                      height: "550px",
                      marginLeft: "24px",
                      backgroundColor: "#B7D4FF",
                    }}
                    key={lawyer.key}
                  >
                    <Card.Img variant="top" src={lawyer.image} alt="lawyer" />
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <>
                        <Card.Title>{lawyer.name}</Card.Title>
                        <Card.Text>Services: {lawyer.services}</Card.Text>
                        <Card.Text>
                          Price: {lawyer.pricePerHourInDollars}$ per hour
                        </Card.Text>
                        <Card.Text>Rating: {lawyer.rating}/5</Card.Text>
                        <QuantityWrapper>
                          <Card.Text>Quantity: {lawyer.quantity}</Card.Text>
                          <Container>
                            <Button
                              onClick={() => {
                                editQuantity(lawyer.key, lawyer.quantity - 1);
                              }}
                            >
                              <Minus />
                            </Button>
                            <Button
                              onClick={() => {
                                editQuantity(lawyer.key, lawyer.quantity + 1);
                              }}
                            >
                              <Plus />
                            </Button>
                            <Button
                              onClick={() => {
                                removeFromCart(lawyer.key);
                              }}
                            >
                              <Trash />
                            </Button>
                          </Container>
                        </QuantityWrapper>
                      </>
                    </Card.Body>
                  </Card>
                ))}
              </ListOfCards>
            </Cards>
          </CardsWrapper>
        </Route>
        <Route path={"/cart/order"}>
          <Order />
        </Route>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.lawyerFirm.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (key) => dispatch(removeFromCart(key)),
    editQuantity: (key, quantity) => dispatch(editQuantity(key, quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
