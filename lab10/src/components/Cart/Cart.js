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
  Order,
} from "./Cart.styled";
import { connect } from "react-redux";
import "../Catalog/loading.css";
import { removeFromCart, editQuantity } from "../../redux/actions";

function Cart({ cart, removeFromCart, editQuantity }) {
  var totalLawyers = 0;
  var totalPrice = 0;
  cart.forEach((lawyer) => {
    totalPrice += lawyer.quantity * lawyer.pricePerHourInDollars;
    totalLawyers += lawyer.quantity;
  });

  return (
    <>
      <Order>
        <Card
          style={{
            width: "18rem",
            height: "65px",
            marginLeft: "24px",
            backgroundColor: "#B7D4FF",
          }}
        >
          <Card.Body>
            <p>
              Total price: {totalPrice} | Total items: {totalLawyers}
            </p>
          </Card.Body>
        </Card>
      </Order>
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
