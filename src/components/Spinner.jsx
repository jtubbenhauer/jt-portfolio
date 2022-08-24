import React from "react";
import { Rings } from "react-loader-spinner";

function Spinner() {
  return (
    <div
      className={
        "absolute flex items-center justify-center w-full h-full transition-all"
      }
    >
      <Rings
        height="120"
        width="120"
        color="#f73d93"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}

export default Spinner;

// background: rgb(255,182,103);
// background: radial-gradient(circle, rgba(255,182,103,0) 0%, rgba(0,0,0,0.630765685180322) 0%, rgba(255,182,103,0) 100%);
