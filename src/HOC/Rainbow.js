import React from 'react';

const Rainbow = (WrappedComponent)=> {
    const colors = ['red', 'orange', 'blue', 'pink', 'yellow', 'green'];
    const randColor = colors[Math.floor(Math.random() * 6)];
    let rainbowText = `${randColor}-text`;

    return(props)=> {
        return(
            <div className={rainbowText}>
                <WrappedComponent {...props} />
            </div>
        )
    }
};

export default Rainbow