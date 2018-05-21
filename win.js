var win = function(game){
	Nb_Food1 = 0;
	Pop1 = 0 ;
}

win.prototype = {
	init: function(Nb_Food,Pop){
	 Nb_Food1 = Nb_Food;
	Pop1 = Pop ;
	},
  	create: function(){
		
		this.game.add.sprite(0, 0, 'win-bg');
		var playButton = this.game.add.button(50,230,"restart",this.playTheGame,this);
		var MainButton = this.game.add.button(250,235,"mainbutton",this.BackToMain,this);
		//playButton.anchor.setTo(0.5,0.5);

		message = this.game.add.text(50, 360, 'Bravo tu as le mode de vie le plus sain \ndes ISEN !', { fontSize: '35px', fill: '#FFF', font: "impact" });
		  
	},
	playTheGame: function(){
		this.game.state.start("TheGame",true,false,Nb_Food1,Pop1);
	},
	BackToMain: function(){
		this.game.state.start("GameTitle",true,false);
	},
}	