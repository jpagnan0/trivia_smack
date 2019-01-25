document.addEventListener('DOMContentLoaded', () => {
	const app = new App();
	app.attachEventListeners();
	// debugger
	app.adapter.fetchUsers().then(data => app.createUsers(data))
	app.adapter.fetchGames().then(data => console.log(data))
	Promise.all(app.adapter.fetchCategories()).then(data => data.flat()).then(data => data.forEach(category => new Category(category)))
	// Promise.all(app.adapter.fetchClues()).then(data => data.flat()).then(data => app.createClues(data))
})
