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
				if(this.genreArray.indexOf(element.genre) == -1) { 
					this.genreArray.push(element.genre);
				}
				//console.log(this.genreArray);
			})
		},
	},
	mounted() {
		axios
			.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then((response) => {
				
				let getData = response.data;
				//console.log(getData);

				let getobj = getData.response;
				//console.log(getobj);

				this.cdsArray = getobj;
				console.log(this.cdsArray);

				this.setGenre(this.cdsArray);
			})	
	}
});


