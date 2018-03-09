import React from 'react';
const HeaderTitle = (props) => {
    return (
        <div>
            <h1 style={titleStyles.projectTitle}>Node Reaction<small style={{ fontSize: 14 }}>®</small></h1>
        </div>
    )
}
const titleStyles = {
    projectTitle: {
        position: 'absolute',
        top: 0,
        left: 550,
        fontFamily: 'monoton, sans-serif',
        fontSize: 50,
        color: '#66FF66'

    }
}
export default HeaderTitle;