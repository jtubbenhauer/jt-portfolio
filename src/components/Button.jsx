import React from "react";
import classNames from "classnames";

function Button({ text, url, borderColor, textColor }) {
  const btnClass = `rounded py-2 px-4 font-semibold text-lg`;
  return (
    <a href={url}>
      <button
        className={classNames(
          "rounded-lg py-2 px-4 font-bold text-lg border-2 border-solid",
          borderColor,
          textColor
        )}
      >
        {text}
      </button>
    </a>
  );
}

export default Button;
