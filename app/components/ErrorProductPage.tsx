import React from "react";

const ErrorProductPage = () => {
  return (
    <div className={`product_introduction product_silver`}>
      <div className="fixed_height" />
      <div className="inside">
        <div className="change_row_column">
          <div>
            <h1 className={`product_id font_13`}>Daný sortiment neexistuje</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ErrorProductPage;
