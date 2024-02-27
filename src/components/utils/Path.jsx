import { RiArrowRightSLine } from "react-icons/ri";
function Path() {
  const paths = ["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"];
  return (
    <div className="paths">
      {paths.map((path, index) => (
        <span key={index} className="path">
          <span>{path}</span>{" "}
          {index !== paths.length - 1 && <RiArrowRightSLine id="icon" />}
        </span>
      ))}
    </div>
  );
}

export default Path;
