import React from 'react';
import ReactDOM from 'react-dom/client';
class Form extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Login Form</h1>
                <div>Username: <input type="text"/></div>
                <div>Password: <input type="password"/></div>
            
            </div>
        )
    }
}
export default Form