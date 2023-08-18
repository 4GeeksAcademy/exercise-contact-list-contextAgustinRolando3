import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export const ModalEditar = () => {
	const [fullName, setfullName] = useState("");
	const [email, setEmail] = useState("");
	const [addres, setAddres] = useState("");
	const [phone, setPhone] = useState("");
	const { store, actions } = useContext(Context);
	const { mostrarModal, setmostrarModal } = false;
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
		<div>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Full Name</label>
								<input
									type="text"
									className="form-control"
									onChange={handleFullName}
									placeholder="Full Name"
								/>
							</div>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className="form-control"
									onChange={handleEmail}
									placeholder="Enter email"
								/>
							</div>
							<div className="form-group">
								<label>Phone</label>
								<input
									type="phone"
									className="form-control"
									onChange={handlePhone}
									placeholder="Enter phone"
								/>
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
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
ModalEditar.propTypes = {
	// history: PropTypes.object,
	// onClose: PropTypes.func,
	// show: PropTypes.bool,
	// id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEditar.defaultProps = {
	// show: false,
	// onClose: null
};
