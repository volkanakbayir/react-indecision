import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndecisionApp } from './components/IndecisionApp'

console.log("App.js is running"); 
const appRoot = document.getElementById('app');
ReactDOM.render(<IndecisionApp />, appRoot);  