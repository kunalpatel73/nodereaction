import React from "react";

const HeaderLogo = props => {
  return (
    <div>
      <img
        style={styles.headerLogo}
        src="https://honeycomb.io/images/integrations/nginx.png"
      />
    </div>
  );
};

const styles = {
  headerLogo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "80px",
    height: "80px"
  }
};

export default HeaderLogo;
