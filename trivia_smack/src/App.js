class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    // this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
    this.createClues = this.createClues.bind(this);
    this.addClue = this.addClue.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#category').addEventListener('click', this.handleCategoryClick);
  }

  handleCategoryClick(e) {
    e.preventDefault()
    if (e.target.dataset.action == 'play') {
      // console.log(e.target);
      const clickedCategory = Category.all.find(category => category.id === parseInt(e.target.dataset.id))
      console.log(clickedCategory);
      document.querySelector('#category').innerHTML = ''
      document.querySelector('#clue').classList.remove('is-invisible')
      this.createClues(clickedCategory.clues)
    }
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
        clueContainer.innerHTML = clue.renderClue()
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
