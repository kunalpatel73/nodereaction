import React, { Component } from "react";
import HeaderTitle from "../components/HeaderTitle";
import HeaderLogo from "../components/HeaderLogo";
import RouteListItem from "../components/RouteListItem.js";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RouteListItem />
        <HeaderTitle />
        {/* <HeaderLogo /> */}
      </div>
    );
  }
}

export default HeaderContainer;
