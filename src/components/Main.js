import React, { Component } from "react";
import axios from 'axios';
import { useState } from 'react';

const Main = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const HTTP = "http://localhost:8020/chat";

    const handleChange = (e) => {
        setPrompt(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post(`${HTTP}`, { prompt })
        .then((res) => {
            setResponse(res.data);
            console.log(prompt);
        })
        .catch((error) => {
            console.log(error);
        });

        setPrompt("");
    }

    return (

        <div className='container'>
            <h1>ChatGPT API</h1>

            <form onSubmit={handleSubmit}>
                <p>Ask a question</p>
                <input 
                type="text"
                placeholder='enter the question.'
                value={prompt}
                onChange={handleChange}
                />

                <button
                className='btn-submit'
                type='submit'
                >
                Submit
                </button>

            </form>

            {/* <div>
                <h3>Your Question: {prompt}</h3>
            </div> */}

            <div className='res-container'>
            <p>{response}</p>
            </div>

        </div>

    ); 
}

export default Main;