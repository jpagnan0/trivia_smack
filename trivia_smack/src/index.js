document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  // app.attachEventListeners();
  // debugger

Promise.all(app.adapter.fetchClues()).then(data => data.flat()).then(data => console.log(app.createClues(data)))

// app.adapter.fetchClues().then(app.createClues)
})
