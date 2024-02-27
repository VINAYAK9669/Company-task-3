/* eslint-disable no-unused-vars */
import Button from "../utils/Button";
import image from "/image.png";
function SuggestionCard({ data }) {
  return (
    <div>
      <div className="top__container">
        <img src={image} />
        <div className="discount">
          <span>{data.discount}%</span>
          <span>{data.period}</span>
        </div>
        <p>{data.name}</p>
      </div>
      <div id="description">
        <p>{data.description}</p>
        <div className="pricing">
          <span id="price">{data.price}</span>
          <span id="or_price">{data.originalPrice}</span>
          <span id="discount_price">({data.discount}% off)</span>
        </div>
      </div>
      <Button>View deal</Button>
    </div>
  );
}

export default SuggestionCard;
