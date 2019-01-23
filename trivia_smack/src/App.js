class App {
  constructor() {
    this.adapter = new Adapter();

    // this.handleEditClick = this.handleEditClick.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createClues = this.createClues.bind(this);
    this.addClues = this.addClues.bind(this);
  }
  createClues(clues) {
    clues.forEach(clue => {
      new Clue(clue);
    });
    this.addClues();
  }

  addClues() {
    document.querySelector('#yo').innerHTML = '';
    Clue.all.forEach(
      clue => (document.querySelector('#yo').innerHTML += clue.renderClue())
    );
  }
}
