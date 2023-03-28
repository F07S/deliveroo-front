const CartTotal = ({ subTotal, total, deliveryFees }) => {
  return (
    <div className={subTotal === 0 ? "hide" : "results"}>
      <div className="subTotal">
        <span>Sous-total </span>
        <span>{subTotal.toFixed(2).replace(".", ",")} €</span>
      </div>
      <div className="feeTotal">
        <span>Frais de livraison </span>
        <span>{deliveryFees.toFixed(2).replace(".", ",")} €</span>
      </div>
      <div className="total">
        <span>Total </span>
        <span>{total.toFixed(2).replace(".", ",")} €</span>
      </div>
    </div>
  );
};

export default CartTotal;
