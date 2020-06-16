import React from "react";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../preview-collection/preview-collection.component";

import "./collections-overview.style.scss";

const CollectionsOverview = (props) => {
  console.log("state Test", props.shopPreview);
  return (
    <div className="collections-overview">
      {props.shopPreview.map(({ id, ...collections }) => (
        <CollectionPreview key={id} {...collections}></CollectionPreview>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopPreview: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
