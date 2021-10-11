import React from "react"

import propTypes from "prop-types"
import Button from "../button/index"

import "./index.scss"

export default function Breadcrumb(props) {
  // console.log(props.data.length)
  const className = ["breadcrumb", props.className];
  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
          {/* perulangan */}
        {props.data.map((item, index) => {
          return (
            // length nya ada 2 jika kurang 1 berarti akan merujuk pada home
            <li key={`breadcrumb-${index}`} className={`breadcrumb-item ${index === props.data.length - 1 ? " active" : ""}`}>
              {index === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href={item.pageHref}>
                  {item.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string
};
