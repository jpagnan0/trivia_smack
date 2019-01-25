const apiPages = [16, 136, 42, 25, 105, 51, 227, 508, 348, 672, 897]
class Adapter {
  constructor() {
    this.baseUrl = 'http://localhost:3000/api/v1/';
    // this.clueUrl = 'http://jservice.io/api/clues?category='
    this.categoryUrl = 'http://jservice.io/api/category?id='
    this.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }

  fetchClues() {
    return apiPages.map((pgNum) => {
      return this.get(`${this.categoryUrl}${pgNum}`)
    })
  }

  fetchCategories() {
    return apiPages.map((pgNum) => {
      return this.get(`${this.categoryUrl}${pgNum}`)
    })
  }
  fetchUsers() {
      return this.get(`${this.baseUrl}users`)
  }
  postUser(body) {
    // debugger
    return this.post(`${this.baseUrl}users`, body);
  }
  fetchGames() {
      return this.get(`${this.baseUrl}games`)
  }
  postGames(body) {
    // debugger
    return this.post(`${this.baseUrl}games`, body);
  }

  get(url) {
    return fetch(url).then(res => res.json());
  }
  post(url, stuff) {
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(stuff),
    }).then(res => res.json())
  }

}
