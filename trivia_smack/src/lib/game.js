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
