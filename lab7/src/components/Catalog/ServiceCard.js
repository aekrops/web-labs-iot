import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import App from "../../App";
import { Cards, Button } from "./ServiceCard.styled";

const ServiceCard = () => {
  const cardInfo = [
    {
      image:
        "https://advokativ.net/wp-content/uploads/2019/10/Advokat-Pokoievych-Artem-Oleksiyovych.jpg",
      title: "Roy Bleck",
      text: "Representation in court",
      price: "100$",
    },
    {
      image:
        "https://advokativ.net/wp-content/uploads/2019/10/Advokat-Marusych-Maksym-Serhiyovych.jpg",
      title: "Joel Segal",
      text: "Advice",
      price: "150$",
    },
    {
      image:
        "https://advokativ.net/wp-content/uploads/2019/07/Advokat-Savchenko-YAroslav-Vasylovych.jpg",
      title: "Jone Branka",
      text: "All services",
      price: "160$",
    },
    {
      image:
        "https://advokativ.net/wp-content/uploads/2018/03/Advokat-Teperyk-Oleksandr-Vyacheslavovych.jpg",
      title: "Harish Salve",
      text: "Advice",
      price: "170$",
    },
    {
      image:
        "https://advokativ.net/wp-content/uploads/2018/03/Advokat-Teperyk-Oleksandr-Vyacheslavovych.jpg",
      title: "Harish Salve",
      text: "All services",
      price: "200$",
    },
    {
      image:
        "https://advokativ.net/wp-content/uploads/2019/10/Advokat-Marusych-Maksym-Serhiyovych.jpg",
      title: "Harish Salve",
      text: "View documents",
      price: "240$",
    },
    {
      image:
        "https://advokativ.net/wp-content/uploads/2018/03/Advokat-Teperyk-Oleksandr-Vyacheslavovych.jpg",
      title: "Harish Salve",
      text: "All services",
      price: "230$",
    },
    {
      image:
        "https://advokativ.net/wp-content/uploads/2019/10/Advokat-Pokoievych-Artem-Oleksiyovych.jpg",
      title: "Harish Salve",
      text: "Advice",
      price: "300$",
    },
    {
      image:
        "https://advokativ.net/wp-content/uploads/2018/03/Advokat-Teperyk-Oleksandr-Vyacheslavovych.jpg",
      title: "Harish Salve",
      text: "All services",
      price: "210$",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Cards>
        <Card
          style={{
            width: "18rem",
            height: "500px",
            marginLeft: "24px",
            backgroundColor: "#B7D4FF",
          }}
          key={index}
        >
          <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Card.Text>{card.price} per hour</Card.Text>
            <Button variant="primary">Contact</Button>
          </Card.Body>
        </Card>
      </Cards>
    );
  };

  return <Cards>{cardInfo.map(renderCard)}</Cards>;
};

export default ServiceCard;
