class Game {
	constructor(data) {
		this.id = data.id
		this.score = data.score
    this.userId = data.user_id
		Game.all.push(this)
	}
  static create({ score, userId }) {
    this.score = score
    this.userId = userId
  }
}
Game.all = []

let gameStats = document.createElement('div');
gameStats.setAttribute("class", "container");
let statString = `<div class="level">
       <div class="level-left">
	       <p id="user-name" class="level-item is-size-5"> User: <span class="has-text-weight-light is-italic">user name here</span></p><br>
	       <p id="score" class="level-item is-size-5"> Score: <span class="has-text-weight-light is-italic">score here</span></p>
       </div>
      </div>`;
gameStats.innerHTML = statString;
let parent = document.querySelector('#title');
// parent.insertBefore(gameStats, parent.childNodes[1])
// console.log(parent);

//pass in user_id get back user element
function setId(uid) {
    let user = document.getElementById('user-name')
    user.setAttribute('data-id', uid)
    return user
}
//pass in element get back added
function setDataId(el, uid) {
    el.setAttribute('data-id', uid)
    return el
}
