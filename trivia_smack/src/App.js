class App {
  constructor() {
    this.adapter = new Adapter();

    // this.handleCategoryClick = this.handleCategoryClick.bind(this);
    // this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
    this.createClues = this.createClues.bind(this);
    this.addClue = this.addClue.bind(this);
  }
  createClues(clues) {
    clues.forEach(clue => {
      new Clue(clue);
    });
    this.addClue();
  }

  addClue() {
    document.querySelector('#clue').innerHTML = '';
    let clue = Clue.all[Math.floor(Math.random()*Clue.all.length)]
    const clueContainer = document.querySelector('#clue')
    // Clue.all.forEach(
      // clue => (
        clueContainer.innerHTML += clue.renderClue()
      // )
    // );
  }
  createCategory(categories) {
    categories.forEach(category => {
      new Category(category);
    });
    this.addCategories();
  }

  addCategories() {
    const categoryContainer = document.querySelector('#category')
    categoryContainer.innerHTML = '';
    // let category = Category.all[Math.floor(Math.random()*Category.all.length)]
    Category.all.forEach(category => (categoryContainer.innerHTML += category.renderCategories())
    );
  }
  
}
