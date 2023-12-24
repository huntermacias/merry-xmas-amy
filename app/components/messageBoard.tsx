'use client'

import React, { useState } from 'react';

const MessageBoard = () => {
	const [messages, setMessages] = useState<string[]>([]); // Provide an initial type for the messages state variable
	const [newMessage, setNewMessage] = useState('');

	const handleNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewMessage(e.target.value);
	};

	const handlePostMessage = () => {
		if (newMessage.trim() !== '') {
			setMessages([...messages, newMessage]);
			setNewMessage('');
		}
	};

	return (
		<div className="bg-green-100 p-4 rounded-lg shadow-md text-center my-4">
			<h2 className="text-xl font-semibold mb-4">Message Board</h2>
			<div className="mb-4">
				<textarea
					rows={4}
					cols={50}
					className="w-full border border-gray-300 rounded-md p-2"
					placeholder="Write your message..."
					value={newMessage}
					onChange={handleNewMessageChange}
				></textarea>
			</div>
			<div>
				<button
					onClick={handlePostMessage}
					className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
				>
					Post Message
				</button>
			</div>
			<div className="mt-4">
				{messages.map((message, index) => (
					<div key={index} className="bg-white p-2 rounded-md shadow-md mb-2">
						{message}
					</div>
				))}
			</div>
		</div>
	);
};

export default MessageBoard;
