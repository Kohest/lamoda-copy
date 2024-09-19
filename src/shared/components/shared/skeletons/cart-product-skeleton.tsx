import React from "react";
import ContentLoader from "react-content-loader";

const CartProductSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={792}
    height={250}
    viewBox="0 0 792 250"
    backgroundColor="#e1e0e0"
    foregroundColor="#b8b7b7"
    {...props}
  >
    <rect x="194" y="66" rx="0" ry="0" width="0" height="1" />
    <rect x="158" y="206" rx="0" ry="0" width="2" height="2" />
    <rect x="105" y="297" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="0" rx="0" ry="0" width="116" height="168" />
    <rect x="152" y="11" rx="13" ry="13" width="200" height="27" />
    <rect x="155" y="50" rx="13" ry="13" width="143" height="25" />
    <rect x="685" y="160" rx="13" ry="13" width="91" height="25" />
    <rect x="576" y="159" rx="13" ry="13" width="91" height="25" />
    <rect x="684" y="16" rx="13" ry="13" width="91" height="25" />
    <rect x="660" y="64" rx="13" ry="13" width="116" height="32" />
  </ContentLoader>
);

export default CartProductSkeleton;
