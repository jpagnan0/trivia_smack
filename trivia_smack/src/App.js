class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleClueSubmit = this.handleClueSubmit.bind(this);
    this.createClues = this.createClues.bind(this);
    this.addClue = this.addClue.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#category').addEventListener('click', this.handleCategoryClick);
    document.querySelector('#clue').addEventListener('click', this.handleClueSubmit)
  }

  handleCategoryClick(e) {
    e.preventDefault()
    if (e.target.dataset.action === 'play') {
      // console.log(e.target);
      const clickedCategory = Category.all.find(category => category.id === parseInt(e.target.dataset.id))
      // console.log(clickedCategory);
      document.querySelector('#category').innerHTML = ''
      document.querySelector('#title').innerText = `Category: ${clickedCategory.title}`
      document.querySelector('#clue').classList.remove('is-invisible')
      this.createClues(clickedCategory.clues)
    }
  }

  handleClueSubmit(e) {
    // e.preventDefault()
    // console.log(e.target);
    if (e.target.dataset.action === 'submit') {
      // console.log(e.target);
      // const foundCategory = Category.all.find(category => category.id === parseInt(e.target.dataset.categoryId))
      const foundClue = Clue.all.find(clue => clue.id === parseInt(e.target.dataset.id))
      const inputField = document.querySelector('input')
      // console.log(foundCategory);
      // console.log(foundClue);
      console.log(inputField.value);
      const clueContainer = document.querySelector('#clue')
      clueContainer.innerHTML = foundClue.renderAnswer(inputField)
    }
    else if (e.target.dataset.action === 'correct') {
      console.log(e.target);
      // increment score for a user
      const foundCategory = Category.all.find(category => category.id === parseInt(e.target.dataset.categoryId))
      // console.log(foundCategory);
      this.createClues(foundCategory.clues)
    }
    else if (e.target.dataset.action === 'incorrect') {
      console.log(e.target);
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
    // console.log(clue);
        clueContainer.innerHTML = clue.renderClue()
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
