import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import './ContactList.scss';

var CONTACTS = [
	{
		id: 1,
		name: 'Darth Vader'
	},
	{
		id: 2,
		name: 'Princess Leia'
	},
	{
		id: 3,
		name: 'Luke Skywalker'
	},
	{
		id: 4,
		name: 'Chewbacca'
	},
	{
		id: 5,
		name: 'Vasya Pupkin'
	},
	{
		id: 6,
		name: 'Ivan Ivanov'
	}
];

class ContactList extends Component {
	constructor(props, context) {
			super(props, context);
			this.state = {
				displayedContacts: CONTACTS
			};
			this.handleSearch = this.handleSearch.bind(this);
		}
	
	handleSearch (event) {
		var searchQuery = event.target.value.toLowerCase();
		var displayedContacts = CONTACTS.filter(function (el) {
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({
			displayedContacts: displayedContacts
		});
	}
	
	render () {
		return (
			<div className="contact-list">
				<input className="search-inp" type="text" onChange={this.handleSearch}/>
				<ul>
					{
						this.state.displayedContacts.map(function (el) {
							return <Contact key={el.id} name={el.name}/>
						})
					}
				</ul>
			</div>
		);
	}
}

export default ContactList;
