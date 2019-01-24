class Login {
	constructor(data) {
		this.id = data.id;
		this.name = data.user_name;
		Login.all.push(this);
	}
}
Login.all = []
