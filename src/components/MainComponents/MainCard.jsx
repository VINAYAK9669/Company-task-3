/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import image from "/image.png";
import Button from "../utils/Button";
import { HiChevronDown } from "react-icons/hi";
import Tag from "../utils/Tag";
import HighlightSection from "../utils/HighlightSection";
import StarRating from "../utils/StarRating";
function MainCard({ data }) {
  return (
    <div className="card">
      {
        <>
          <span id="numbering__element">{data.id}</span>
          <div className="tag__container">
            <Tag data={data} />
          </div>
          <div id="image_section">
            <img src={image} />
            <span>{data.hostName}</span>
          </div>
          <div id="description">
            <div>
              <p id="main__description">
                <span id="heading">{data.name}</span> -{" "}
                <span id="details">{data.description}</span>
              </p>
              <HighlightSection data={data} />
            </div>

            <a href="#" className="show-more">
              <span>Show More </span> <HiChevronDown />
            </a>
          </div>
          <div id="rating">
            <div className="top">
              <span className="grade font-big">{data.rating}</span>
              <span className="grade font-md">{data.grade}</span>
              <div>
                <StarRating rating={Number(data.rating)} />
              </div>
            </div>
            <Button>View</Button>
          </div>
        </>
      }
    </div>
  );
}

export default MainCard;
