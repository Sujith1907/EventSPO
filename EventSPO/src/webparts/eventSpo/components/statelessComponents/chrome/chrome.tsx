import * as React from 'react';
import MenuBar from '../Navigation/MenuBar/MenuBar';
const Chrome = (props:any) => (
    <div>
        <MenuBar />
        <main>
            {props.children}
        </main>
    </div>
);

export default Chrome;