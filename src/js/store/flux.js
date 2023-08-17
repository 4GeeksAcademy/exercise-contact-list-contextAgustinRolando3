const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			obtenerInfo: async function() {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Agustin"); //especificamos la url donde vamos a buscar info
					let data = await response.json();
					setStore({ contacts: data });
					// console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			crearContacto: async function(fullName, email, phone, address) {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							full_name: fullName,
							email: email,
							agenda_slug: "Agustin",
							address: address,
							phone: phone
						})
					});
					let data = await response.json();
					// console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			eliminarContacto: async function name(id) {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					const data = await response.json();
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
