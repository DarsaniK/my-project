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
class Hii extends React.Component{
    render()
    {
        return(
            <h2>I am at Hii class</h2>
        )
    }
}
class Good extends React.Component{
    render()
    {
        return(
            <h3>I am at good class</h3>
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
                <Hello /><Hii /><Good />
                </>
        )
    }
}
export default ClassComponents