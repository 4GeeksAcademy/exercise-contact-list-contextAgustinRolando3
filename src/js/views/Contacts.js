import React, { useState, useEffect, useContext } from "react"; //para traer el store y actions desde el flux
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"; //para traer el store y actions desde el flux

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});
	const { store, actions } = useContext(Context); //para traer el store y actions desde el flux
	console.log(store);

	useEffect(() => {
		actions.obtenerInfo();
	}, [store.contacts]);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((item, id) => (
							<ContactCard
								full_name={item.full_name}
								email={item.email}
								phone={item.phone}
								address={item.address}
								key={item.id}
								onDelete={() => setState({ showModal: true, id: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal id={state.id} show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
