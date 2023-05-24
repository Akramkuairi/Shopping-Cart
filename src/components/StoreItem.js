import React from "react";
import { Button, Card } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

const StoreItem = ({ id, price, name, imgUrl }) => {
  // getItemQuantity,
  // increaseQuantity,
  // decreaseQuantity,
  // removeItemFromCart,

  const {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseQuantity(id)}>
              Add to Cart{" "}
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column "
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseQuantity(id)}>-</Button>
                <span className="fs-3">{quantity} in card</span>
                <Button onClick={() => increaseQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
