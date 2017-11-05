import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NumberForm from './NumberForm'

const st = {textAlign: 'center'}
ReactDOM.render(
    <div style={st}>
        <NumberForm />
    </div>,
    document.getElementById('root')
)