import React from "react";

const ViewPass = () => {
  const x = document.getElementById("bluefield2") as HTMLInputElement;

  if (x) {
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
};

export default ViewPass;
