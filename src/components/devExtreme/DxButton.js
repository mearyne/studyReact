import React from 'react';

import Button from 'devextreme-react/button';

function DxButton(props) {
    if (!props.shouldRender) {
        return null;
    }

    return (
        <Button></Button>
    );
}

class App extends React.Component {
    render() {
        return (
            <DxButton shouldRender="condition"/>
        );
    }
}

export default App;
