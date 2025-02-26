import { use } from "react";
import Modal from "./UI/Modal";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../../utils/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const cartCtx = use(CartContext);
  const userProgressCtx = use(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const handleClose = () => {
    userProgressCtx.hideCheckout();
  };

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="fullName" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <div className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </div>
      </form>
    </Modal>
  );
}
