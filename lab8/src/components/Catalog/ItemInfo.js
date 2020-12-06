import React from "react";
import { Card } from "react-bootstrap";

function ItemInfo(props) {
  console.log("niceeeeeeeeee");
  console.log(props.items);
  var item = props.items;
  const pathname = window.location.pathname.split("/").pop();
  var selected = item.filter((itemSelected) =>
    itemSelected.key.includes(pathname)
  );
  return (
    <div>
      {selected.map((select) => (
        <Card
          style={{
            width: "18rem",
            height: "500px",
            marginLeft: "24px",
            backgroundColor: "#B7D4FF",
          }}
        >
          <Card.Img variant="top" src={select.val().image} />
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Card.Title>{select.val().name}</Card.Title>
              <Card.Text>{select.val().services}</Card.Text>
              <Card.Text>
                {select.val().pricePerHourInDollars} per hour
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default ItemInfo;
