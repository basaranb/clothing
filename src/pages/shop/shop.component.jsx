import React from "react";
import CollectionsOverview from "../../component/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";

import CollectionPage from "../collection/collection.component";

const Shop = (
  { match } //Shop is inside a <Route> in App.js, match, location, history are automatically passed
) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
    <Route
      path={`${match.path}/:categoryId`}
      component={CollectionPage}
    ></Route>
  </div>
);

export default Shop;
