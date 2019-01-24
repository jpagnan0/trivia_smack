class Clue {
	constructor(data) {
		this.id = data.id;
		this.question = data.question;
		this.answer = data.answer;
		this.categoryId = data.category.id
		Clue.all.push(this);
	}


	renderClue() {
		return `
    <div id=${this.id} class="column is-12-tablet is-6-desktop is-5-widescreen">

      <div class="card">

        <div class="card-header has-text-centered">
          <p class="title card-header-title">${this.question}</p>
        </div>

        <div class="card-content">
          <div class="content">
            <p class="title">${this.clues_count} questions to be answered!</p>

              <div class="field is-grouped">
                <div class="control is-expanded">
                  <input class="input is-normal" type="text" placeholder="Answer Me BABY" value="">
                </div>

                <div class="control">
                  <button data-id=${this.id} type="submit" data-action="submit" class="button is-primary is-normal"> Check It? </button>
                </div>
            	</div>

          </div>
        </div>

				<footer class="card-footer">
					<p class="card-footer-item"><span><a href="#">Play!</a></span></p>
					<p class="card-footer-item">
						<span class="icon is-medium">
							<i class="fas fa-heart" aria-hidden="true"></i>
						</span>
					</p>
				</footer>

      </div>

    </div>
    `
	}
	static findById(id) {
		return this.all.find(note => note.id === id)
	}
}
Clue.all = []


`
      <div id=${this.id} class="column is-12-tablet is-6-desktop is-3-widescreen">
        <div class="card">
          <div class="card-content">
            <p class="title">${this.title}</p>
            <p class="subtitle">${this.clues_count} questions to be answered!</p>
          </div>

        </div>
      </div>
    </div>`
