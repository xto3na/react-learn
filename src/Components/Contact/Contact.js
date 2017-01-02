import React, { Component } from 'react';

class Contact extends Component {
	render () {
		return (
			<li className="contact" key={this.props.id}>{this.props.name}</li>
		);
	}
}

export default Contact;

