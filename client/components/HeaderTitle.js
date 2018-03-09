import React from 'react';
const HeaderTitle = (props) => {
    return (
        <h1 style={titleStyles.projectTitle}>Node Reaction</h1>
    )
}
const titleStyles = {
    projectTitle: {
        position: 'absolute',
        top: 0,
        left: 650,
        fontFamily: 'strumpf-std, sans-serif',
        fontSize: 50,

    }
}
export default HeaderTitle;