import { HiCheck } from "react-icons/hi";

function HighlightSection({ data }) {
  return (
    <div>
      {data.hostName !== "CDK" ? (
        <>
          <h3>Main Highights</h3>
          <p id="highlights">{data.highlights}</p>
        </>
      ) : (
        <>
          <span className="discount_price ">{data.discount}% off</span>
          <h3>Main Highights</h3>
          <div id="highlights" className="special-points">
            {data.highlights.map((curData, index) => (
              <p key={index} id="points">
                <span id="rating">{curData.rating}</span>{" "}
                <span>{curData.description}</span>
              </p>
            ))}
          </div>
          <div id="love__section">
            <p>Why We Love it</p>
            {data.love.map((curPoint, index) => (
              <div key={index} className="lists">
                <HiCheck id="icon" />
                <span>{curPoint}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default HighlightSection;
