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
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda"); //especificamos la url donde vamos a buscar info
					let data = await response.json();
					setStore({ contacts: data });
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;

