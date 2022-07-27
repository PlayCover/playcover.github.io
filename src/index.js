import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import PlayCover from './PlayCover';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <PlayCover />
    </BrowserRouter>,
    document.getElementById('root')
);
