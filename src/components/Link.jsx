import React from "react";

function Link({ link, text }) {
  return (
    <a
      className="p-2 bg-gray-100 my-2 active:bg-green-100 rounded w-full flex justify-center"
      target="_blank"
      href={link}
    >
      {text}
    </a>
  );
}

export default Link;
