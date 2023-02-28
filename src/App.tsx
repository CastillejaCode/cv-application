import React, { Component } from 'react';
import Output from './components/Output';
import Personal from './components/Personal';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			personal: {},
		};

		this.handleInfo = this.handleInfo.bind(this);
	}

	handleInfo = (e) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		this.setState({ personal: formJson });
	};

	render() {
		const { personal } = this.state;
		return (
			<div className='flex flex-col items-center'>
				<div className='header flex justify-center'>
					<div className='title py-6 text-4xl text-gray-50'>CV Application Generator</div>
				</div>
				<div className='input flex w-1/2 flex-col items-center text-gray-50'>
					<form action='' className='flex flex-col items-center gap-5' onSubmit={this.handleInfo}>
						<div className='flex flex-col'>
							<label htmlFor='name'>Name</label>
							<input
								className='rounded-md pl-2 text-gray-900'
								type='text'
								id='name'
								name='name'
								placeholder='Jane Doe'
								// onChange={}
							/>
						</div>

						<div className='flex flex-col'>
							<label htmlFor='email'>Email</label>
							<input
								className='rounded-md pl-2 text-gray-900'
								type='email'
								id='email'
								placeholder='coolcv@gmail.com'
								name='email'
							/>
						</div>

						<div className='flex flex-col'>
							<label htmlFor='tele'>Phone Number</label>
							<input className='rounded-md pl-2 text-gray-900' type='tele' placeholder='661 123 1234' name='tele' />
						</div>

						<button type='submit' className=' w-fit rounded-md border-2 border-slate-200 px-4 py-1'>
							Submit
						</button>
					</form>
				</div>
				<div className='output border-2 border-red-500 text-gray-50'>
					<Output personal={personal} />
				</div>
			</div>
		);
	}
}

export default App;
