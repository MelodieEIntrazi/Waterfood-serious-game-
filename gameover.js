var gameOver = function(game){
	Nb_Food1=0;
	Pop1 = 0 ;
	scoreText = "";
	Text_Eaten_Calorie = "";
	Last_Eaten_Food = "";
	score1 = 0;
	calorie1=0;
	

}

gameOver.prototype = {
	init: function(Nb_Food,Pop,score,calorie){
		Nb_Food1 = Nb_Food;
		Pop1 = Pop;
		score1 = score;
		calorie1= calorie;
		
	   },
  	create: function(){
		
		this.game.add.sprite(0, 0, 'gameover-bg');
		var playButton = this.game.add.button(50,230,"restart",this.playTheGame,this);
		var MainButton = this.game.add.button(250,235,"mainbutton",this.BackToMain,this);
		//playButton.anchor.setTo(0.5,0.5);
		scoreText = this.game.add.text(160, 300, 'Nombre de repas: '+score1, { fontSize: '35px', fill: '#FFF', font: "impact" });
		Text_Eaten_Calorie = this.game.add.text(160, 360, 'Calories sur la journée: '+calorie1, { fontSize: '35px', fill: '#FFF', font: "impact"});
		message_2 = this.game.add.text(30,450, 'Dommage, pense à manger plus équilibré !',{ fontSize: '35px', fill: '#FFF', font: "impact"});
	},
	playTheGame: function(){
		this.game.state.start("TheGame",true,false,Nb_Food1,Pop1);
	},
	BackToMain: function(){
		this.game.state.start("GameTitle",true,false);
	}
}	