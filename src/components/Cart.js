import PlusIcon from "./PlusIcon";
import MinusIcon from "./MinusIcon";

const Cart = ({ addItem, removeItem, cartItem }) => {
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item">
          <div className="plus-minus">
            <span onClick={() => removeItem(cartItem)}>
              <MinusIcon size={20} />
            </span>
            <span>{cartItem.quantity}</span>
            <span onClick={() => addItem(cartItem)}>
              <PlusIcon size={20} />
            </span>
          </div>
          <div className="cart-title">{cartItem.title}</div>
          <div className="cart-item-price">
            {(Number(cartItem.price) * cartItem.quantity)
              .toFixed(2)
              .replace(".", ",") + " €"}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
