import React from 'react';
import ReactDOM from 'react-dom/client';
class Hello extends React.Component{
    render()
    {
        return(
            <h1>I am at hello class</h1>
        )
    }
}
class ClassComponents extends React.Component{
    render()
    {
        return(
            <>
            <ul>
                <li>Mango</li>
                <li>Apple</li>
                <li>Orange</li>
                <li>PineApple</li>
                </ul>
                <Hello />
                </>
        )
    }
}
export default ClassComponents