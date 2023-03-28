import Meal from "./Meal";

const Category = ({ elem, index, addItem }) => {
  return (
    <div>
      <div key={index} className="meal-container">
        <div>
          <h1 key={index} className="title">
            {elem.name}
          </h1>
        </div>

        <div key={index} className="meal-box">
          {elem.meals.map((item) => {
            return <Meal item={item} key={item.id} addItem={addItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
