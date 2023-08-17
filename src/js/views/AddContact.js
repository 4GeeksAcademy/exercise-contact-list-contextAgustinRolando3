import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const [fullName, setfullName] = useState("");
	const [email, setEmail] = useState("");
	const [addres, setAddres] = useState("");
	const [phone, setPhone] = useState("");
	const { store, actions } = useContext(Context);
	function agregar(e) {
		e.preventDefault();
		actions.crearContacto(fullName, email, phone, addres);
	}

	function handleFullName(e) {
		e.preventDefault();
		setfullName(e.target.value);
	}
	function handleEmail(e) {
		e.preventDefault();
		setEmail(e.target.value);
	}
	function handlePhone(e) {
		e.preventDefault();
		setPhone(e.target.value);
	}
	function handleAddres(e) {
		e.preventDefault();
		setAddres(e.target.value);
	}
	console.log(fullName);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input type="text" className="form-control" onChange={handleFullName} placeholder="Full Name" />
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" onChange={handleEmail} placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" onChange={handlePhone} placeholder="Enter phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							onChange={handleAddres}
							placeholder="Enter address"
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={agregar}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
