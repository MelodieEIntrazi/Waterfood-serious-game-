var theGame = function(game){
    player = null;
    platforms = null;
    cursors=null;
    GPfood=null;
    score = 0;
    scoreText=null;
    button=null;
    Nb_Food_onScrean = 0;
    current_Food_Calorie=0;
    Text_Eaten_Calorie=0;
    Last_Eaten_Food=null;
    idRand=0;
    pauseKey=null;
    fullscreanKey=null;
    current_Food_Calorie_true=0;
    PercentLifeBar =100;
    stateText="";
    PositionRand=0;
    Coef = 0.1; 
    MoonPosition=0;
    SunPosition=0;
    MoonY=0;
    octopus=null;
    octopus_speech=null;
    bulle=null;
    YourName ='Neger';
    me = this;
    time = 30;
    GPmonster=null;
    Vitesse_Player=150 ;
    IsPaused = false;
    w = 0; 
    h=0 ;
    menu = null;
    choiseLabel = "";
    vie = "";
    boucleId=null;
    TimeMonster = 0 ;

}
 
theGame.prototype = {
    init: function(Nb_Food, Pop){
        Nb_Food_onScrean = Nb_Food;
        TimeMonster = Pop ; 
    },
  	create: function(){
        //Je dois def une variable pour Mon PopFood For je saos pas Pk
        w= this.game.world.width; 
        h= this.game.world.height;
        //La color du background mais il balec
        this.game.stage.backgroundColor = '#FF69B4';
        //Ajoute un objet cycle un peu comme la bar de vie
        this.dayCycle = new DayCycle(this.game, 20000);   
        //Crée une map pour l'écran
        let bgBitMap = this.game.add.bitmapData(this.game.width, this.game.height);
     
            bgBitMap.ctx.rect(0, 0, this.game.width, this.game.height);//adapte la Map a l'écran
            bgBitMap.ctx.fillStyle = '#FF69B4'; //Pour modif la couleur 
            bgBitMap.ctx.fill(); //Fill = remplir ca doit remplir un truc 
            
            //Je crois que ca change la couleur en fct du temp 
            this.backgroundSprite = this.game.add.sprite(0, 0, bgBitMap);
            //Demande le soleil et la lune 
            this.sunSprite = this.game.add.sprite(50, -250, 'sun');
            this.moonSprite = this.game.add.sprite(this.game.width - (this.game.width / 4), this.game.height + 500, 'moon');
     
        //Met la première chaine de montagne 
        this.mountainsBack = this.game.add.tileSprite(0,
            this.game.height - this.game.cache.getImage('mountains-back').height +100,
            this.game.width,
            this.game.cache.getImage('mountains-back').height,
            'mountains-back'
        );
        //Met la 2 eme 
        this.mountainsMid1 = this.game.add.tileSprite(0,
            this.game.height - this.game.cache.getImage('mountains-mid1').height + 100,
            this.game.width,
            this.game.cache.getImage('mountains-mid1').height,
            'mountains-mid1'
        );
        //et la 3 eme 
        this.mountainsMid2 = this.game.add.tileSprite(0,
            this.game.height - this.game.cache.getImage('mountains-mid2').height +100,
            this.game.width,
            this.game.cache.getImage('mountains-mid2').height,
            'mountains-mid2'
        );
    
      
        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = this.game.add.group();
    
        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;
    
        // Here we create the ground.
        var ground = platforms.create(0, this.game.world.height -24, 'ground');
    
        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        ground.scale.setTo(2, 1);
        //  This stops it from falling away when you jump on it
        ground.body.immovable = true;
    
        // The player and its settings
        player = this.game.add.sprite(this.game.world.width / 2, this.game.world.height - 150, 'guy');
        //Octopus and Setting 
        octopus = this.game.add.sprite(650,this.game.world.height - 200 , 'seacreatures');
    
    
        //NutellaMonster every 10s 
        GPmonster = this.game.add.group();
    
        GPmonster.enableBody = true;//que les body se touchent
        
    
        //Bulle Speech Octopis
        bulle = this.game.add.sprite(650, 0, 'bulle');
        //  We need to enable physics on the player
        this.game.physics.arcade.enable(player);
        
        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0.2;//Il fait des petits bond quand il retombe
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;//Peut pas sortir du screan
       
    
        //  Our two animations, walking left and right.
        //Anim avec le Json chaque image s'appelle frame-1 frame-2... frame-14 
        //Le 13 je sais aps a quoi ca sert juste c'est nombre d'im - 1  
        player.animations.add('moveR', Phaser.Animation.generateFrameNames('frame-', 1, 6), 13, true);
        player.animations.add('moveL', Phaser.Animation.generateFrameNames('frame-', 7, 12), 13, true);
        player.animations.add('stand', Phaser.Animation.generateFrameNames('frame-', 13, 14), 13, true);
        //Octopus animations 
        octopus.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
        octopus.animations.play('swim');
          
        //  Finally some GPfood to collect
        GPfood = this.game.add.group();
    
        //  We will enable physics for any food that is created in this groupFoodName
        GPfood.enableBody = true;
    
        //Pour que les repas soient répartis sur tout le jeu(Useless if Position Rand)
        //var ecart = game.world.width / Nb_Food_onScrean;
        //  Here we'll create 12 of them evenly spaced apart
    
        //Fontion chelou je sais pas la faire marché si je la mets comme les autre a cause du SetInter
        //Et si je def pas des variables et que je mets game.paused ou game.world.width marche powa
      boucleId=  setInterval( function(){   
            for (var i = 0; i < Nb_Food_onScrean && IsPaused==false ; i++) {
            

            //Pour faire pop un food au pif
            idRand = Math.floor((Math.random() * FoodName.length));

            //Pour mettre a des position Rand sur la carte
            PositionRand = Math.floor((Math.random() * w));

            //  Create a food inside of the 'GPfood' group
            var food = GPfood.create(5+PositionRand, 0, FoodName[idRand].name);

            //Assigne des paramètres que je sors de l'espace a mon food
            food.name = FoodName[idRand].name;
            food.calories = FoodName[idRand].calories;
            if(MoonY < 0 ){//Manger Durant la Noche pas mettre de Else()
                food.calories = FoodName[idRand].KcalByNight;
                
            }
            food.state = FoodName[idRand].state;

            //  Let gravity do its thing
            food.body.gravity.y = 300;
        }
    
        }, 1000);
    
        //  TExts 
        scoreText = this.game.add.text(16, 16, 'Nombre de repas: 0', { fontSize: '15px', fill: '#FFF' });
        Text_Eaten_Calorie = this.game.add.text(16, 36, 'Calories sur la journée: 0', { fontSize: '15px', fill: '#FFF' });
        Last_Eaten_Food = this.game.add.text(16, 56, 'Calories du dernier repas: 0', { fontSize: '15px', fill: '#FFF' });
        //MoonPosition = this.game.add.text(16, 76, 'Moon Position: NONE', { fontSize: '15px', fill: '#FFF' });
        //SunPosition = this.game.add.text(16, 96, 'SunPosition: NONE', { fontSize: '15px', fill: '#FFF' });
        //Vitesse_Player = this.game.add.text(16, 116, 'Vitesse: NONE', { fontSize: '15px', fill: '#FFF' });
        octopus_speech = this.game.add.text(675, 0, 'Salut je suis ton nutritionniste', { fontSize: '13px',wordWrap: true, wordWrapWidth: bulle.width, align: "center", fill: '#800000' });
        
       
    
        //  Our controls.
        cursors = this.game.input.keyboard.createCursorKeys();
        pauseKey = this.game.input.keyboard.addKey(Phaser.Keyboard.P);
        fullscreanKey = this.game.input.keyboard.addKey(Phaser.Keyboard.F); 
    
        // Create a label to use as a button
        pause_label = this.game.add.text(this.game.world.width -150, 20, 'P = Pause', { font: '24px Arial', fill: '#fff' });
        pauseKey.inputEnabled = true;//ca sert a quoi ?
        //this.pause relou as fck ... faut pas mettre les parenthèses quand c'est dans un .add()
        pauseKey.onDown.add(this.pause,this,self);
        // Add a input listener that can help us return from being paused
        this.game.input.onDown.add(this.unpause,this,self);
        //Marche powa peut pas rappuyer sur P pour unpause snif
        //pauseKey.onDown.add(this.unpause,this,self); 
        
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;//Pour le fullScrean
    
        fullscreanKey.onDown.add(this.gofull, this);//Le F du Fullscrean
    
    
        var barConfig = { x: this.game.world.width  / 2, y: this.game.world.height - 550 };//Config pour la bar de vie
        this.myHealthBar = new HealthBar(this.game, barConfig);//Creer une bar de vie 
        Vie = this.game.add.text(this.game.world.width  / 2 - 30, this.game.world.height - 560, 'Vie: NONE', { fontSize: '15px', fill: '#FFF' });
        //GAME OVER
    
        stateText = this.game.add.text(this.game.world.centerX,this.game.world.centerY,' ', { font: '75px Arial', fill: '#fff' });
        stateText.anchor.setTo(0.5, 0.5);
        stateText.visible = false;
        
        //Modifie la coleur en fct du temps
        let backgroundSprites = [
            {sprite: this.backgroundSprite, from: 0x1f2a27, to: 0xB2DDC8},
            {sprite: this.mountainsBack, from: 0x2f403b, to: 0x96CCBB},
            {sprite: this.mountainsMid1, from: 0x283632, to: 0x8BBCAC},
            {sprite: this.mountainsMid2, from: 0x202b28, to: 0x82AD9D}
        ];
    
        //Utilise les fonctions de la classe DayCycle
        this.dayCycle.initShading(backgroundSprites);//Pour Faire l'ombre durant la nuit
        this.dayCycle.initSun(this.sunSprite);//Fonction Soleil
        this.dayCycle.initMoon(this.moonSprite);//FOntion Lune
        //Octopus UP and Down
        this.game.add.tween(octopus).to({ y: this.game.world.height-150 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
    
        //TIMER
        me.startTime = new Date();
        me.totalTime = time;
        me.timeElapsed = 0;
     
        me.createTimer();
     
        me.gameTimer = this.game.time.events.loop(100, function(){
            me.updateTimer();
        });
		
		
    },
    update: function(){
            
            //Bouge les montagnes avec le temps
            this.mountainsBack.tilePosition.x -= 0.05;
            this.mountainsMid1.tilePosition.x -= 0.3;
            this.mountainsMid2.tilePosition.x -= 0.75; 
            
            //  Collide the player and the GPfood with the platforms
            var hitPlatform = this.game.physics.arcade.collide(player, platforms);
            //pour pas que mon Nuttella se casse dans le vide
            this.game.physics.arcade.collide(GPmonster, platforms);
            
            //  Checks to see if the player overlaps with any of the GPfood, if he does call the collectfood function
            this.game.physics.arcade.overlap(player, GPfood, this.collectFood, null, this);
            //Kill the star on the floor
            this.game.physics.arcade.overlap(platforms, GPfood, this.collectFood2, null, this);
        
            //  Reset the players velocity (movement)
            player.body.velocity.x = 0;
           
            if (cursors.left.isDown) {
                //  Move to the left
                player.body.velocity.x = - this.Slowdown();//Attention faut mettre les parenthèses la 
                player.animations.play('moveL');
            }
            else if (cursors.right.isDown) {
                //  Move to the right
                player.body.velocity.x = this.Slowdown();
                player.animations.play('moveR');
            }
            else {
                //  Stand still
                player.animations.play('stand');
                // player.frame = 13;
            }
        
            //  Allow the player to jump if they are touching the ground.
            if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
                player.body.velocity.y = -this.Slowjump();
            }
            //Change la bar de vie 
            PercentLifeBar = 100 + Coef * current_Food_Calorie_true;
            Vie.text="Vie : " + Math.round(PercentLifeBar);
            this.myHealthBar.setPercent(PercentLifeBar);
        
            //game over NEGER si la vie est sous 0 ou toucher par le nutellaMonster
            if (PercentLifeBar <= 0 || this.game.physics.arcade.overlap(player,GPmonster))
            {
               player.kill();
               me.timeLabel.kill();
               //Permet de tuer le nutella Monster dans une groupe 
               GPmonster.removeAll(true);
               this.game.state.start("GameOver",true,false,Nb_Food_onScrean,TimeMonster,score,current_Food_Calorie);
               clearInterval(boucleId);
               this.restart();
        
               octopus_speech.text ="Tu feras mieux \n la prochaine fois";
        
            }
            else if(PercentLifeBar <= 20 && PercentLifeBar > 0 ){
        
               octopus_speech.text ="+ de légumes";
            }
            else if(PercentLifeBar > 20 && PercentLifeBar <= 50){
        
                octopus_speech.text ="Tu peux encore \n mieux faire";
            }
            else if(PercentLifeBar > 50 && PercentLifeBar <= 80 ){
        
                octopus_speech.text ="Continue \n comme ça";
            }
            else if(PercentLifeBar > 80 &&  me.timeElapsed > 3 ){
        
                octopus_speech.text ="      \n Wow ! \n ";
            }
            //Position des Sun Moon
            SunPosition.text="Sun Position : " +Math.round( this.sunSprite.position.y) ;
            MoonPosition.text="Moon Position : " + Math.round(this.moonSprite.position.y);
            MoonY = Math.floor(this.moonSprite.position.y);
            //Bulle Qui suit l'octopussy
            bulle.y = Math.floor(octopus.y - octopus.height);
            //Text Suit la bulle
            octopus_speech.y = Math.floor(bulle.y + octopus.height/2);
            //Modif le text de L'octopus en fonction de la situationa
        
            //QUand on Win 
            if(me.timeElapsed >= me.totalTime && PercentLifeBar >= 0 ){
                player.kill();
                me.timeLabel.kill();
                GPmonster.removeAll(true);//tue tout les nutella monster a l'écran sans tuer le groupe
                
                this.game.state.start("Win",true,false,Nb_Food_onScrean,TimeMonster);
                clearInterval(boucleId);
                this.restart();
                octopus_speech.text ="Bravo!"+ name;
            }
          
            
            //Fait Pop le nutella en fonction de la lune parce que mskn je sais pas le faire avec le temps
            if(MoonY % TimeMonster == 0 && this.game.paused == false ){
            this.Pop_Nutella_Monster();
            }
                       
            //affiche la vitesse du player
            Vitesse_Player.text="Vitesse: "+Math.floor(this.Slowdown());


   }, 

	collectFood:function(player, food){
		// Removes the food from the screen
        food.kill();
        //  Add and update the score
        score += 1;
        current_Food_Calorie += food.calories;
        
        scoreText.text = 'Nombre de Repas:' + score;
        Text_Eaten_Calorie.text = 'Nombre de Calorie Sur la journee:' + current_Food_Calorie;
        Last_Eaten_Food.text = 'Calories du dernier repas:' + food.calories;
    
        //Gagne ou perd des points de vie en fonction de la qualité de la nourriture 
        if(food.state == true && PercentLifeBar < 100){
            current_Food_Calorie_true += food.calories
            }
        else if(food.state == false)
        {
         current_Food_Calorie_true -= food.calories
            }
    },
    

	collectFood2: function(platforms, food){
		food.kill();
	},
	gofull:function(){
		this.game.scale.startFullScreen();
	},
	render: function(){
        if (this.game.scale.isFullScreen) {
            this.game.debug.text('ECHAP pour quitter plein écran', 270, 16);
        }
        else {
            this.game.debug.text('F pour mettre en plein écran', 270, 16);
        }
    
    },
	restart: function(){
	//  A new level starts
    
    //resets the life count
    current_Food_Calorie_true = 0 ;
    current_Food_Calorie = 0 ;
    PercentLifeBar = 100;
    score = 0 ;
    
    //revives the player
    player.revive();
    me.timeLabel.revive();
    //hides the text
   //tateText.visible = false;

    me.startTime = new Date();
    me.totalTime = time;
    me.timeElapsed = 0;
		
    },
    Pop_Nutella_Monster:function() {

        var nutellamonster = GPmonster.create(650,this.game.world.height - 150 , 'nutellamonster');
        //NutellaMonster Anim avec un Json 
        nutellamonster.animations.add('attack', Phaser.Animation.generateFrameNames('layer', 1, 8), 7, true);
        nutellamonster.body.gravity.y = 300;
        nutellamonster.body.velocity.x = -220// Vitesse a motif si on veut un plus rapide 
        nutellamonster.animations.play('attack');// joue l'anim
        },
    Slowdown:function(){
       var slow = PercentLifeBar +50 ; //slow en fct de la vie 
       return slow;
    },
    Slowjump:function(){
        var slow = PercentLifeBar + 250 ; 
        return slow;
     },
    
    createTimer:function(){
 
        //var me = this;
     
        me.timeLabel = me.game.add.text(me.game.world.centerX,me.game.world.centerY -250 , "00:00", {font: "50px Arial", fill: "#fff"});
        me.timeLabel.anchor.setTo(0.5, 0);
        me.timeLabel.align = 'center';
     
    },
    
     updateTimer: function(){
     
        //var me = this;
     
        var currentTime = new Date();
        var timeDifference = me.startTime.getTime() - currentTime.getTime();
     
        //Time elapsed in seconds
        me.timeElapsed = Math.abs(timeDifference / 1000);
     
        //Time remaining in seconds
        var timeRemaining = me.totalTime - me.timeElapsed;
     
        //Convert seconds into minutes and seconds
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = Math.floor(timeRemaining) - (60 * minutes);
     
        //Display minutes, add a 0 to the start if less than 10
        var result = (minutes < 10) ? "0" + minutes : minutes;
     
        //Display seconds, add a 0 to the start if less than 10
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds;
     
        me.timeLabel.text = result;
     
    },
      unpause:function(event) {
        // Only act if paused
        if (this.game.paused) {
            // Calculate the corners of the menu
            var x1 = this.game.width/ 2 - 270 / 2, x2 = this.game.width/ 2 + 270 / 2,
                y1 = this.game.height/ 2 - 180 / 2, y2 = this.game.height/ 2 + 180 / 2;

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
    pause:function () {
        // When the paus button is pressed, we pause the game
        this.game.paused= true;
        IsPaused =  true
        // Then add the menu
        menu = this.game.add.sprite(this.game.width / 2,this.game.height/ 2, 'notice');
        menu.anchor.setTo(0.5, 0.5);

        // And a label to illustrate which menu item was chosen. (This is not necessary)
         choiseLabel = this.game.add.text(this.game.width / 2, this.game.height- 150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
        choiseLabel.anchor.setTo(0.5, 0.5);
    }
   
 
}
