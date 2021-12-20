import React from "react";
import "./Button.scss";

interface Props {
  type?: "button" | "submit" | "reset";
  text?: string;
  onClick?: () => any;
}

export default function Button(props: Props) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="button"
      data-testid="button"
    >
      {props.text}
    </button>
  );
}
