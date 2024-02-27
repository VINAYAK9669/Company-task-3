import {
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import Categories from "../utils/Categories";
import Path from "../utils/Path";

function Headers() {
  return (
    <div className="header">
      <h1 id="header__name">Best Website builders in the US</h1>
      <div className="sub__header">
        <div className="sub__header__left">
          <p>
            <HiOutlineCheckCircle className="icon" /> -
            <span>February 22, 2020</span>
          </p>
          <p>
            <HiOutlineInformationCircle className="icon" /> -{" "}
            <span>Advertising Disclosure</span>
          </p>
        </div>
        <div className="sub__header__right">
          <span>Top Relevant</span>
          <HiOutlineChevronDown className="icon" />
        </div>
      </div>
      <Categories />
      <Path />
    </div>
  );
}

export default Headers;
