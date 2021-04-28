var app = new Vue({

	el: '#root',
	data: {
		cdsArray: [],
	},
	methods: {

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

			})	
	}
});
