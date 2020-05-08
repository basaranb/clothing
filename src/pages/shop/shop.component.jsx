import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../component/preview-collection/preview-collection.component";
export default class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...collections }) => (
          <CollectionPreview key={id} {...collections}></CollectionPreview>
        ))}
      </div>
    );
  }
}
