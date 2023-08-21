import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    className="pizza-block"
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="130" cy="130" r="125" />
    <rect x="0" y="276" rx="10" ry="10" width="280" height="24" />
    <rect x="0" y="320" rx="10" ry="10" width="280" height="89" />
    <rect x="0" y="432" rx="10" ry="10" width="91" height="27" />
    <rect x="129" y="423" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
