import React from "react";
import "./preview-collection.style.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter(({ id }) => id < 5)
        .map(({ id, ...theRest }) => (
          <CollectionItem key={id} {...theRest}></CollectionItem>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
