class SignIn {
	constructor(data) {
		this.id = data.id;
		this.user_name = data.user_name;
		SignIn.all.push(this);
	}
  static create({ name }) {
    this.userName = name;
  }
  // static findById(id) {
	// 	return this.all.find(note => note.id === id)
	// }
}
SignIn.all = []
