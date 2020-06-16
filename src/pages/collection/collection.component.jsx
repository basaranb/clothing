import React from "react";
import "./collection.style.scss";

import CollectionItem from "../../component/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const CollectionPage = (props) => {
  console.log("collection", props.collection);
  return (
    <div className="collection-page">
      <h2 className="title">{props.collection.title}</h2>
      <div className="items">
        {props.collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state), //selectCollection returns a function so we pass (state) after invoking the function
});

export default connect(mapStateToProps)(CollectionPage);
