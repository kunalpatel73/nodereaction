import React, { Component } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import HeaderLogo from '../components/HeaderLogo';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderLogo />
                <HeaderTitle />
            </div>
        )
    }
}

export default HeaderContainer;
