import { Formik, Form } from "formik";
import { Styles, Title } from "./Order.styled";
import { connect } from "react-redux";
import { removeAllFromCart } from "./../../redux/actions";
import { useHistory } from "react-router-dom";
import CustomInput from "./CustomInput";
import * as yup from "yup";

const Order = ({ removeAllFromCart }) => {
  const history = useHistory();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <>
      <Styles>
        <Formik
          initialValues={{
            firstName: "",
            secondName: "",
            email: "",
            cardNumber: "",
            cvc: "",
            expiryMonth: "",
            expiryYear: "",
            phoneNumber: "",
          }}
          validationSchema={yup.object({
            firstName: yup
              .string()
              .min(3, "Too short.Must be at least 3 characters.")
              .max(15, "Too long.Must be 15 characters or less")
              .required("Required"),
            secondName: yup
              .string()
              .min(3, "Too short.Must be at least 3 characters.")
              .max(15, "Too long.Must be 15 characters or less")
              .required("Required"),
            email: yup.string().email("Invalid email").required("Required"),
            cardNumber: yup
              .string()
              .label("Card number")
              .max(16)
              .min(16)
              .required(),
            cvc: yup.string().label("CVC").min(3).max(4).required(),
            expiryMonth: yup
              .string()
              .label("Expiry month")
              .min(2)
              .max(2)
              .required(),
            expiryYear: yup
              .string()
              .label("Expiry year")
              .min(4)
              .max(4)
              .required(),
            phoneNumber: yup
              .string()
              .matches(phoneRegExp, "Phone number is no valid"),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              console.log(values);
              history.push("/success");
              removeAllFromCart();
            }, 2000);
          }}
        >
          {(props) => (
            <Form>
              <Title>Ordering</Title>
              <CustomInput
                label="Your first name"
                name="firstName"
                type="text"
                placeholder="frank"
              />
              <CustomInput
                label="Your second name"
                name="secondName"
                type="text"
                placeholder="boston"
              />
              <CustomInput
                label="Email adress"
                name="email"
                type="email"
                placeholder="frank@thetank.com"
              />
              <CustomInput
                label="Card number"
                name="cardNumber"
                type="text"
                placeholder="card number"
              />
              <CustomInput
                label="Card's CVC"
                name="cvc"
                type="number"
                placeholder="123"
              />
              <CustomInput
                label="Card's Expiry Month"
                name="expiryMonth"
                type="number"
                placeholder="expiry month"
              />
              <CustomInput
                label="Card's Expiry Year"
                name="expiryYear"
                type="number"
                placeholder="expiry year"
              />
              <CustomInput
                label="Phone number"
                name="phoneNumber"
                type="number"
                placeholder="+380963212311"
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </Styles>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAllFromCart: () => dispatch(removeAllFromCart()),
  };
};

export default connect(null, mapDispatchToProps)(Order);
