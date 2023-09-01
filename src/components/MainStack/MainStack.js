import React from 'react';

function MainStack({title, stackName, children, id}) {

    return (
        <section className='about MainStack' id = {id}>
            <h1 className="MainStack__title">{stackName}</h1>
            {children}
        </section>
    )
}

export default MainStack;