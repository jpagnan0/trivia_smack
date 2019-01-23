document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  // app.attachEventListeners();
  // debugger
Promise.all(app.adapter.fetchCategories()).then(data => data.flat()).then(data => app.createCategory(data))
Promise.all(app.adapter.fetchClues()).then(data => data.flat()).then(data => app.createClues(data))

// app.adapter.fetchClues().then(app.createClues)
})
