import { useState } from 'react';
import {
    InputType, Header, HandleType,
} from '../Common';
import { HANDLE_INPUT } from './constants';
import { isValidUrl } from './Utils';

export const UrlNode = ({ id, data }) => {
    const [url, setUrl] = useState('https://www.google.com');

    const [error, setError] = useState('');


    const handleNameChange = (e) => {
        setUrl(e.target.value);
        setError(isValidUrl(url) ? '' : 'Enter Valid URL ')
    };


    const handlesList = [{
        value: 'GetUrl',
        type: HANDLE_INPUT.SOURCE,
    }, {
        value: 'SendUrlResponse',
        type: HANDLE_INPUT.TARGET,
    }]

    return (
        <div
            className='card'
        >
            <div className='card-body'>
                <Header
                    id={id}
                    title="URL"
                />
                <InputType
                    id={id}
                    label="Enter URL"
                    value={url}
                    handleChange={handleNameChange}
                    error={error}
                />
                <HandleType
                    id={id}
                    data={handlesList}
                />
            </div>
        </div>
    );
};
