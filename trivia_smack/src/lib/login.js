class Login {
	constructor(data) {
		this.id = data.id;
		this.userName = data.user_name;
		Login.all.push(this);
	}
  static create({ name }) {
    this.userName = name;
  }
  // static findById(id) {
	// 	return this.all.find(note => note.id === id)
	// }
}
Login.all = []
