import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Meal = ({ item, addItem }) => {
  return (
    <div
      className="meals"
      onClick={() => {
        addItem(item);
        toast(`${item.title} a été ajouté à votre panier!`);
      }}
    >
      <div className="box-text">
        <span className="meal-title">{item.title}</span>
        <div className={!item.description ? "hidden" : "meal-desc"}>
          {item.description}
        </div>
        <div className="price-popular-box">
          <p className="price">{item.price} €</p>

          {item.popular && (
            <p className="popular" style={{ color: "#FF8000" }}>
              <FontAwesomeIcon icon="star" />
              {"  "}
              Populaire
            </p>
          )}
        </div>
      </div>
      <div></div>
      <img className={!item.picture && "hidden"} src={item.picture} alt="" />
    </div>
  );
};

export default Meal;
