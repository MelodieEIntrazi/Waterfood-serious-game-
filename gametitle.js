var gameTitle = function (game) { 
    
}

gameTitle.prototype = {
	create: function () {
		this.game.stage.disableVisibilityChange = true;
		this.game.add.sprite(0, 0, 'menu-bg');
		var rules_button = this.game.add.button(55, 200, "rules", this.pause, this);
		//rules_button.anchor.setTo(0.5, 0.5);
		this.game.input.onDown.add(this.unpause, this, self);

		var niveau1 = this.game.add.button(30, 320, "level1", this.Niveau1, this);
		//niveau1.anchor.setTo(0.5, 0.5);
		var niveau2 = this.game.add.button(230, 320, "level2", this.Niveau2, this);
		var niveau3 = this.game.add.button(430, 320, "level3", this.Niveau3, this);
		
	},
	Niveau1: function () {
		this.game.state.start("TheGame",true,false,4,300);
	},
	Niveau2: function () {
		this.game.state.start("TheGame",true,false,8,200);
	},
	Niveau3: function () {
		this.game.state.start("TheGame",true,false,12,100);
	},

	unpause: function (event) {
		// Only act if paused
		if (this.game.paused) {
			// Calculate the corners of the menu
			var x1 = this.game.width / 2 - 270 / 2, x2 = this.game.width / 2 + 270 / 2,
				y1 = this.game.height / 2 - 180 / 2, y2 = this.game.height / 2 + 180 / 2;

			// Check if the click was inside the menu
			if (event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2) {
				// The choicemap is an array that will help us see which item was clicked
				var choisemap = ['one', 'two', 'three', 'four', 'five', 'six'];

				// Get menu local coordinates for the click
				var x = event.x - x1,
					y = event.y - y1;

				// Calculate the choice 
				var choise = Math.floor(x / 90) + 3 * Math.floor(y / 90);

				// Display the choice
				choiseLabel.text = 'You chose menu item: ' + choisemap[choise];
			}
			else {
				// Remove the menu and the label
				menu.destroy();
				choiseLabel.destroy();

				// Unpause the game
				IsPaused = false;
				this.game.paused = false;
			}
		}
	},
	pause: function () {
		// When the paus button is pressed, we pause the game
		this.game.paused = true;
		IsPaused = true
		// Then add the menu
		menu = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'notice');
		menu.anchor.setTo(0.5, 0.5);

		// And a label to illustrate which menu item was chosen. (This is not necessary)
		choiseLabel = this.game.add.text(this.game.width / 2, this.game.height - 15, 'Clique pour continuer', { font: '30px Arial', fill: '#fff' });
		choiseLabel.anchor.setTo(0.5, 0.5);
	}

}	