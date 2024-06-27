import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [inputs, setInputs] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInput = (e) => {
		const { name, value } = e.target;

		setInputs((preState) => {
			return { ...preState, [name]: value };
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		const postForm = async () => {
			try {
				const res = await axios.post(
					"http://localhost:3000/submit-form",
					inputs
				);
				console.log(res);
				setLoading(false);
				setInputs({
					name: "",
					email: "",
					message: "",
				});
			} catch (error) {
				console.log(error);
			}
		};
		postForm();
	};
	return (
		<>
			<div className="container">
				<div className="form-container">
					<h1>Form Generator</h1>
					<form action="" onSubmit={handleSubmit}>
						<div className="form-input">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								required
								name="name"
								value={inputs.name}
								onChange={handleInput}
							/>
						</div>
						<div className="form-input">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								required
								value={inputs.email}
								onChange={handleInput}
							/>
						</div>
						<div className="form-input">
							<label htmlFor="message">Message</label>
							<textarea
								name="message"
								id="message"
								cols="30"
								required
								rows="8"
								value={inputs.message}
								onChange={handleInput}
							></textarea>
						</div>
						<span className="submitted-message">
						 Submitted!!!
						</span>

						<button className="btn" type="submit">
							{loading ? <span className="loader"></span> : null}
							Submit
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;