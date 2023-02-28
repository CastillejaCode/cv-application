import React, { Component } from 'react';

class Personal extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<form action='' className='flex flex-col items-center gap-5'>
				<div className='flex flex-col'>
					<label htmlFor='name'>Name</label>
					<input className='rounded-md pl-2 text-gray-900' type='text' id='name' placeholder='Jane Doe' />
				</div>

				<div className='flex flex-col'>
					<label htmlFor='email'>Email</label>
					<input className='rounded-md pl-2 text-gray-900' type='email' id='email' placeholder='coolcv@gmail.com' />
				</div>

				<div className='flex flex-col'>
					<label htmlFor='tele'>Phone Number</label>
					<input className='rounded-md pl-2 text-gray-900' type='tele' placeholder='661 123 1234' />
				</div>

				<button
					className=' w-fit rounded-md border-2 border-slate-200 px-4 py-1'
					onClick={(e) => {
						e.preventDefault();
					}}
				>
					Submit
				</button>
			</form>
		);
	}
}

export default Personal;
