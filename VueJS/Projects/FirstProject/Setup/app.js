
new Vue({
	el: "#app",
	data:{
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	computed:{

	},
	methods:{
		startGameFunction: function(){
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;

		},
		attack: function(){
			var damage = this.calculateDamage(3,10);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true, 
				text: 'Player hit monster for ' + damage
			});
			if(this.checkWin()){
				return;
			}
			this.monsterAttack();
		},
		spcialAttack: function(){

		},
		heal: function() {
			var health = 0;
			if(this.playerHealth <= 90) {
				health = 10;
			}
			else {
				health = 100 - this.playerHealth;								
			}
			this.playerHealth += health;
			this.turns.unshift({
				isPlayer: true,
				text: 'Player health for ' + health
				});
			this.monsterAttack();
		},
		giveUp: function(){
			this.gameIsRunning = false;

		},
		calculateDamage: function(min, max){
			return Math.max(min, Math.floor(Math.random()* max) + 1);
		},
		checkWin: function(){
			if(this.monsterHealth <= 0)
			{
				if(confirm("You won!, new game?"))	//yes or no dialog
				{
					this.startGameFunction();
				}
				else {
					this.gameIsRunning = false;
				}
				return true;
			} 
			else if(this.playerHealth <= 0)
			{
				if(confirm("You lose!, new game?"))	//yes or no dialog
				{
					this.startGameFunction();
				}
				else{
					this.gameIsRunning = false;
				}
				return true;
			}
			return false;
		},
		monsterAttack: function() {
			var damage = this.calculateDamage(5,12);
			this.playerHealth -= damage;
			this.checkWin();
			this.turns.unshift({
				isPlayer: false, 
				text: 'Monster hit player for ' + damage
			});

		}
	},
	watch:{

	}
});