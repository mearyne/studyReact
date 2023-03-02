import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Body from "../components/fragments/Body";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Body">
                <Body/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;