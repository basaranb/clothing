import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const selectCollectionsForPreview = createSelector(
  [shopSelector],
  (shop) => Object.keys(shop).map((key) => shop[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [shopSelector],
    (shopCategory) => shopCategory[collectionUrlParam]
  );

export const testSelector = createSelector([shopSelector], (shop) => shop);
