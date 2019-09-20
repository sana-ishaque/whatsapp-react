
import React from 'react';
import PropTypes from 'prop-types';
import '../css-component/Message.css'


class Message extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.imgURL}></img>
                </div>
                <div className="body">
                    <div>
                        <p className="name">{this.props.name}</p>
                        <p className="number">{this.props.number}</p>
                        <p>{this.props.text}</p>
                        <p className="time">{this.props.time}</p></div>
                    <div>
                        <p>{this.props.status}</p>
                    </div>
                </div>

            </div>
        );
    }
}


Message.propTypes = {
    imgURL: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string,
    status: PropTypes.string,
}
export default Message;
