import React from "react";
import ContentLoader from "react-content-loader";

const CartSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={723}
    viewBox="0 0 1200 603"
    backgroundColor="#e1e0e0"
    foregroundColor="#b8b7b7"
    uniqueKey="cart-skeleton-loader"
    {...props}
  >
    <rect x="194" y="66" rx="0" ry="0" width="0" height="1" />
    <rect x="2" y="0" rx="0" ry="0" width="792" height="74" />
    <rect x="158" y="206" rx="0" ry="0" width="2" height="2" />
    <rect x="105" y="297" rx="0" ry="0" width="0" height="1" />
    <rect x="3" y="112" rx="0" ry="0" width="116" height="168" />
    <rect x="154" y="119" rx="13" ry="13" width="200" height="27" />
    <rect x="156" y="156" rx="13" ry="13" width="143" height="25" />
    <rect x="698" y="284" rx="13" ry="13" width="91" height="25" />
    <rect x="589" y="283" rx="13" ry="13" width="91" height="25" />
    <rect x="697" y="140" rx="13" ry="13" width="91" height="25" />
    <rect x="673" y="188" rx="13" ry="13" width="116" height="32" />
    <rect x="820" y="-7" rx="23" ry="23" width="410" height="293" />
  </ContentLoader>
);

export default CartSkeleton;
