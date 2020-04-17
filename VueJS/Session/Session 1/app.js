new Vue({
	el: '#app',
	data: {
		title: 'Hello World!',
		link: 'http://google.com',
		finishedLink: '<a href="http://google.com">Google</a>',
		counter: 0,
		secondCounter: 0,
		x: 0,
		y: 0,
		attachRed: false,
		property: 'green',
		color: 'green'
	},

    computed:{
    	output:function(){
    		return this.counter>5?'Greater 5':'Smaller than 5';
    	},
    	divClasses:function(){
    		return {
    			red: this.attachRed,
    			blue: !this.attachRed
    		};
    	}
    },

    watch:{
    	counter: function(value) { // the key want to watch (counter property)
    		var vm = this;
    		setTimeout(function(){
    			vm.counter = 0;
    		}, 2000);
    	}
    },

	methods: {
		changeTitle: function(event) {
			this.title = event.target.value;
		},
		increase: function(value) {
			this.counter++;
		},
		updateCoordinates: function(event){
			this.x = event.clientX;
			this.y = event.clientY;
		},
		result:function(){
	    	console.log('method');
			return this.counter>5?'Greater 5':'Smaller than 5';
		}
	}
});
