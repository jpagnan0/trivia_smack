// const CAT_IDS = ['16', '136', '42', '25', '105', '51', '227', '508', '348', '672', '897'];
// const BASE_URL = `http://jservice.io/api/category?id=`;

// ["http://jservice.io/api/category?id=16", "http://jservice.io/api/category?id=136", "http://jservice.io/api/category?id=42", "http://jservice.io/api/category?id=25", "http://jservice.io/api/category?id=105", "http://jservice.io/api/category?id=51", "http://jservice.io/api/category?id=227", "http://jservice.io/api/category?id=508", "http://jservice.io/api/category?id=348", "http://jservice.io/api/category?id=672", "http://jservice.io/api/category?id=897"
// CATEGORY class
// class CategoryComponent {
// 	constructor(id, title, clues_count) {
// 		this.id = id,
// 		this.title = title,
// 		this.clues_count = clues_count
// 	}
//
// 	renderCategory() {
// 		return `
// 			<div id=${this.id}>
// 				<h1>${this.title}</h1>
// 				<p>${this.clues_count} questions to be answered!</p>
// 			</div>
// 		`
// 	}
// }

// class CategoryCollectionComponent {
// 	constructor(categories) {
// 		this.categories = categories
// 	}
//
// 	// Render the created CategoryComponents?
//
// }

// ALL THE CATEGORIES (DATA)

class Category {

	constructor(data) {
		this.id = data.id,
			this.title = data.title,
			this.clues_count = data.clues_count,
			this.clues = data.clues,
			Category.all.push(this)
	}

	// `
	// 		<div id=${this.id}>
	// 			<h1>${this.title}</h1>
	// 			<p>${this.clues_count} questions to be answered!</p>
	//
	// 		</div>
	// 		`


	// disable submit until input is != ""
	renderCategories() {
		return `
					<div id=card-${this.id} class="column is-12-tablet is-6-desktop is-3-widescreen">
						<div class="card">
						  <div class="card-content">
						    <p class="title">${this.title}</p>
						    <p class="subtitle">${this.clues_count} questions to be answered!</p>
						  </div>
						  <footer class="card-footer is-marginless">
						    <p class="card-footer-item is-paddingless is-marginless">
									<button style="border-radius: none; height: 100%;" data-id=${this.id} data-action="play" class="is-marginless button is-fullwidth is-outlined is-info is-normal">Play!</button>
								</p>
						    <p class="card-footer-item">
									<span class="icon is-medium">
								 		<i class="fas fa-heart" aria-hidden="true"></i>
							 		</span>
						    </p>
						  </footer>
						</div>
					</div>
				</div>`
	}
	static findById(id) {
		return this.all.find(note => note.id === id)
	}
}
Category.all = [];

// const categories = CAT_IDS.map(id => fetch(`${BASE_URL}${id}`).then(res => res.json()))
// const categoryCollection = Promise.all(categories).then(category => category.forEach((c => new Category(c))))

// function mapClues() {
// 	for (let i = 0; i < c.all.length; i++) {
// 		return Category.all[i].clues.map(clue => `
//                 <div class='question'>
//                     <p>${clue.question}</p>
//                     <p>${clue.answer}</p>
//                 </div>
//             `)
// 	}
//
// }
// //within the mapped category obj add data-id to div
// function CategoryToHTML() {
//
// }
// function catIterator() {
// 	   return fetch()
// 		   .then(parseJSON)
// 		     .then(categories => categories.map((category) => (new CategoryComponent(category.id, category.title, category.clues_count))))
// }
//
// parseJSON(res) {
// 	return res.json()
// }

// class CategoryComponent {
// 	constructor(id, title, clues_count, clues) {
// 		this.id = Object.id,
// 			this.title = Object.title,
// 			this.clues_count = Object.clues_count
// 		this.clues = Object.clues
// 	}
//
// }


// let body = document.querySelector('body');
// categoryHTML = mapClues().join(" ");
// body.innerHTML = categoryHTML;
