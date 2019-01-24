class Clue {
	constructor(data) {
		this.id = data.id;
		this.question = data.question;
		this.answer = data.answer;
		this.categoryId = data.category_id
		Clue.all.push(this);
	}


	renderClue() {
		return `
    <div id=${this.id} class="column is-12-tablet is-8-desktop is-offset-4-desktop is-8-widescreen is-offset-2-widescreen">

      <div class="card" style:"height: 100%;" >

        <div class="card-header has-text-centered">
          <p class="title card-header-title">${this.question}</p>
        </div>

        <div class="card-content">
          <div class="content">

              <div class="field is-grouped">
                <div class="control is-expanded">
                  <input data-answer="answer" class="input is-large" type="text" placeholder="Answer Me BABY" value="">
                </div>

                <div class="control">
                  <button data-id=${this.id} data-category-id=${this.categoryId} type="submit" data-action="submit" class="button is-primary is-large"> Check It? </button>
                </div>
            	</div>

          </div>
        </div>

      </div>

    </div>
    `
	}
	static findById(id) {
		return this.all.find(note => note.id === id)
	}
}
Clue.all = []

/************************************************************


 ********** Back of card bottom ✅ and ⨂ buttons ************
	<footer class="card-footer">
		<p class="card-footer-item is-paddingless is-marginless">
			<button style="border-radius: 0; height: 100%;" data-id=${this.id} data-action="play" class="is-marginless button is-fullwidth is-outlined is-submit is-normal"><i class="fas fa-check-circle"></i></button>
		</p>
		<p class="card-footer-item is-paddingless is-marginless">
			<button style="border-radius: 0; height: 100%;" data-id=${this.id} data-action="play" class="is-marginless button is-fullwidth is-outlined is-danger is-normal"><i class="fas fa-times-circle"></i></button>
		</p>
	</footer>
************************************************************/
