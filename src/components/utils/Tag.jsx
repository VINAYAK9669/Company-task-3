import { HiOutlineTrophy } from "react-icons/hi2";
import { SlDiamond } from "react-icons/sl";

/* eslint-disable no-unused-vars */
function Tag({ data }) {
  return (
    <>
      {data.bestChoice && (
        <div className="tag">
          <HiOutlineTrophy />

          <span>Best Choice</span>
        </div>
      )}

      {data.bestValue && (
        <div className="tag">
          <SlDiamond />
          <span>Best Value</span>
        </div>
      )}
    </>
  );
}

export default Tag;
