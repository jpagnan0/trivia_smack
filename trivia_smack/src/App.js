let counter = 0
class App {
  constructor() {
    this.adapter = new Adapter();

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleClueSubmit = this.handleClueSubmit.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.createUsers = this.createUsers.bind(this);
    // this.createClues = this.createClues.bind(this);
    this.addClue = this.addClue.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#category').addEventListener('click', this.handleCategoryClick);
    document.querySelector('#clue').addEventListener('click', this.handleClueSubmit)
    document.querySelector('#signIn').addEventListener('click', this.handleSignIn)
  }
  handleSignIn(e) {
    if (e.target.dataset.action === 'signIn') {
      // console.log(e.target);
      const username = document.querySelector('input').value;
      // console.log(username);
      const categories = Category.all
      // console.log(categories);
      this.adapter.postUser({'user_name': username}).then(createdUser => {
        // console.log(createdUser)
        new SignIn(createdUser)
        })
      document.querySelector('#signIn').innerHTML = ''
      document.querySelector('#category').classList.remove('is-invisible')
      this.addCategories()
    }
  }

  handleCategoryClick(e) {
    // e.preventDefault()
    if (e.target.dataset.action === 'play') {
      // console.log(e.target);
      const clickedCategory = Category.all.find(category => category.id === parseInt(e.target.dataset.id))
      // console.log(clickedCategory);
      document.querySelector('#category').innerHTML = ''
      document.querySelector('#title').innerText = `Category: ${clickedCategory.title}`
      document.querySelector('#clue').classList.remove('is-invisible')
      this.addClue(clickedCategory)
    }
  }

  handleClueSubmit(e) {
    // e.preventDefault()
    // console.log(e.target);
    if (e.target.dataset.action === 'submit') {
      // console.log(e.target);
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
      counter++
      this.addClue(foundCategory)
      console.log(counter);
    }
    else if (e.target.dataset.action === 'incorrect') {
      // console.log(e.target);
      document.querySelector('#clue').innerHTML = ''
      document.querySelector('#title').innerText = `Categories`
      // document.querySelector('#clue').classList.remove('is-invisible')
      console.log(counter);
      this.addCategories()
      counter = 0
      console.log(counter);
    }
  }

  createUsers(users) {
    users.forEach(user => {
      new SignIn(user)
    })
  }

  // createClues(categories) {
  //   // categories.forEach(category => {
  //   //   category.clues.forEach(clue => {
  //   //     new Clue(clue)
  //   //   })
  //   // });
  //   this.addClue();
  // }

  addClue(category) {
    document.querySelector('#clue').innerHTML = '';
    let clues = Clue.all.filter( clue => clue.categoryId === category.id)
    // console.log(clues)
    let clue = clues[Math.floor(Math.random()*clues.length)]
    const clueContainer = document.querySelector('#clue')
    // console.log(clue);
        clueContainer.innerHTML = clue.renderClue()
  }
  // createCategory(categories) {
  //   // categories.forEach(category => {
  //   //   new Category(category);
  //   // });
  //   this.addCategories();
  // }

  addCategories() {
    const categoryContainer = document.querySelector('#category')
    categoryContainer.innerHTML = '';
    document.querySelector('#title').innerText = `Categories`
    // let category = Category.all[Math.floor(Math.random()*Category.all.length)]
    Category.all.forEach(category => (categoryContainer.innerHTML += category.renderCategories()));
  }
}
