import React from 'react';
import { Loader } from './styles';

const LoadingIndicator = () => {
    return (
        <Loader>
            <div className="lds-ripple">
                <div />
                <div />
            </div>
        </Loader>
    );
}

export default LoadingIndicator;