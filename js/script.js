var app = new Vue({

	el: '#root',
	data: {
		selectedGenre: 'all',
		cdsArray: [],
		genreArray: [],
	},
	methods: {
		setGenre(genres) {
			genres.forEach((element) => {
				// controllo i generi nell'array genreArray (no duplicati)
				if(this.genreArray.indexOf(element.genre) == -1) { // meglio includes più chiaro
					this.genreArray.push(element.genre);
				}
				//console.log(this.genreArray);
			})
		},
		sortYears(cds) {
			cds.sort((a, b) => {
				return a.year - b.year
			});
		}
	},
	mounted() {
		console.log('prima di axios', this.cdsArray);
		axios
			.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then((response) => {
				
				let getData = response.data;
				//console.log(getData);

				let getobj = getData.response;
				//console.log(getobj);

				this.cdsArray = getobj;
				//console.log(this.cdsArray);

				this.sortYears(this.cdsArray);

				this.setGenre(this.cdsArray);
			});
	}
});


