class Clue {
  constructor(data) {
    this.id = data.id;
    this.question = data.question;
    this.answer = data.answer;
    this.categoryId = data.category.id
    Clue.all.push(this);
  }


  renderClue() {
    return `<div>
                <h2>${this.question}</h2>
                <p>${this.answer}
                  <button data-id=${this.id} data-action='submit'>Submit</button>
                </p>
            </div>`
          }
  static findById(id) {
    return this.all.find(note => note.id === id)
  }
}
Clue.all = []
