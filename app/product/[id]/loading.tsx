import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className={`product_introduction `}>
      <div className="fixed_height" />
      <div className="inside">
        <div className="change_row_column">
          <div>
            <h1 className={`product_id font_13`}>
              <Skeleton count={1} width={80} borderRadius={10} />
            </h1>
          </div>
          <div>
            <h1 className={`font_13`}>
              <Skeleton count={1} width={300} borderRadius={10} />
            </h1>
            <p>
              <Skeleton count={4} width={300} borderRadius={10} />
            </p>
            <div className="margin_bottom_5"></div>

            <div className="mt-8">
              <Skeleton count={1} width={120} height={30} borderRadius={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
