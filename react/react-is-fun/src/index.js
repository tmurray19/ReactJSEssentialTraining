import React from 'react'
import ReactDOM from 'react-dom'

// Creating React components
// All React componets should be capitalised
class Message extends React.Component {
    render(){
        console.log(this.props)
        // JSX curly braces
        return (
            <div>
                <h1 style = {{ color: this.props.color}}>
                    {this.props.msg}
                </h1>
                <p>
                    I'll check back in {this.props.age} minutes
                </p>
            </div>
        )
    }
}

ReactDOM.render(
    <Message age = {50} color="fuchsia" msg="How are you?"/>,
    document.getElementById('root')
)
