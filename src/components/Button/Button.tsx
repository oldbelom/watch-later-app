import React from "react";
import "./Button.scss";

export default function Button(props: ButtonProps) {
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
