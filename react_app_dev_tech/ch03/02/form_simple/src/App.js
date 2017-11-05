import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SimpleForm } from './SimpleForm'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <SimpleForm />
      </div>
    );
  }
}