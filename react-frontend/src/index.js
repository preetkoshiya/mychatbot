import * as ReactDOM from 'react-dom/client';
import React from 'react';
import {io} from 'socket.io-client';
import {Header} from "./Header";
import {UserInput} from "./UserInput";
import './index.css'

const messageBox = document.getElementById('box');
const socket = io('http://localhost:8000');

const append = (text, position) =>{
  const messageEle = document.createElement('div');
  messageEle.innerText = text;
  messageEle.classList.add('text');
  messageEle.classList.add(position);
  messageBox.append(messageEle);
  messageBox.scrollTop = messageBox.scrollHeight;
}

function onSubmitMessage(inputText) {
  const message = inputText;
  append(`You: ${message}`, 'right');
  socket.emit('send', message);
}

const name = prompt("Enter your name:");
socket.emit('user-joined', name);

socket.on('greetings', data =>{
  append(`Ramlal: Welcome ${name}! How can I help you?`, 'left');
})

socket.on('receive', data =>{
  append(`${data.name}: ${data.message}`, 'left')
})

const head = document.getElementById('Header');
const hb = ReactDOM.createRoot(head);
hb.render(<Header />)

const input = document.getElementById('userInput');
const it = ReactDOM.createRoot(input);
it.render(<UserInput onSubmitMessage={onSubmitMessage} />)