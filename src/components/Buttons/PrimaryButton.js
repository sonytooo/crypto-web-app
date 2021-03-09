import React from 'react';
import {PrimaryButton as PB, PrimaryButtonText} from './styles';

const PrimaryButton = ({text, onClick}) => {
    return (
        <div>
            <PB onClick={onClick}>
                <PrimaryButtonText>{text}</PrimaryButtonText>
            </PB>
        </div>
    )
}

export default PrimaryButton;