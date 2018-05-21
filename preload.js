var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 
        var loadingBar = this.add.sprite(160,240,"loading");
          loadingBar.anchor.setTo(0.5,0.5);
          this.load.setPreloadSprite(loadingBar);
          this.game.load.image("menu-bg","assets/background/options-bg.jpg");
          this.game.load.image("gameover-bg","assets/background/gameover-bg.png");
          this.game.load.image("win-bg","assets/background/win-bg.png");


        //DOUDOU
        this.game.load.image('mountains-back', 'assets/background/mountains-back.png');
        this.game.load.image('mountains-mid1', 'assets/background/mountains-mid1.png');
        this.game.load.image('mountains-mid2', 'assets/background/mountains-mid2.png');
        this.game.load.image('sun', 'assets/background/sun2.png');
        this.game.load.image('moon', 'assets/background/moon2.png');
        this.game.load.image('ground', 'assets/background/platform.png');
    
        //------------------------sprites--------------------------------------\\
    
         this.game.load.atlas('guy', 'assets/sprites/guy.png', 'assets/sprites/guy.json');
         this.game.load.atlas('nutellamonster', 'assets/sprites/nutellamonster.png', 'assets/sprites/nutellamonster.json');
         this.game.load.atlas('seacreatures', 'assets/sprites/seacreatures_json.png', 'assets/sprites/seacreatures_json.json');
    
        //-----------------------buttons_bubbles--------------------------------------\\
    
        this.game.load.image('menu', 'assets/buttons_bubbles/number-buttons-90x90.png', 270, 180);
        this.game.load.image('bulle', 'assets/buttons_bubbles/Bulle.png');
        this.game.load.image("rules","assets/buttons_bubbles/Rules.png");
        this.game.load.image("notice","assets/buttons_bubbles/notice.jpg");
        this.game.load.image("level1","assets/buttons_bubbles/Niveau1.png");
        this.game.load.image("level2","assets/buttons_bubbles/Niveau2.png");
        this.game.load.image("level3","assets/buttons_bubbles/Niveau3.png");
        this.game.load.image("restart","assets/buttons_bubbles/Restart.png");
        this.game.load.image("mainbutton","assets/buttons_bubbles/mainbutton.png");

        
    
        //------------------------------------ALL FOODS ----------------------------------\\
       
        //------------------------JUNK_FOOD------------------------------------------\\
    
        this.game.load.image('chickenwings', 'assets/junk_food/ChikenWings.png');
        this.game.load.image('chinois', 'assets/junk_food/Chinois.png');
        this.game.load.image('churros', 'assets/junk_food/Churos.png');
        this.game.load.image('coffee', 'assets/junk_food/Coffee.png');
        this.game.load.image('donut', 'assets/junk_food/Donut.png');
        this.game.load.image('frites', 'assets/junk_food/Frites.png');
        this.game.load.image('glace', 'assets/junk_food/Glace.png');
        this.game.load.image('macaron', 'assets/junk_food/Macaron.png');
    
        this.game.load.image('cakechocofraise', 'assets/junk_food/CakeChocoFraise.png');
        this.game.load.image('cheesecakefraise', 'assets/junk_food/CheesecakeFraise.png');
        this.game.load.image('cookieframb', 'assets/junk_food/CookieFramboise.png');
        this.game.load.image('cupcakefraise', 'assets/junk_food/CupcakeFraise.png');
        this.game.load.image('fraisier', 'assets/junk_food/Fraisier.png');
        this.game.load.image('gateaufraise', 'assets/junk_food/GateauFraise.png');
        this.game.load.image('gauffregrose', 'assets/junk_food/GauffreGroseille.png');
        this.game.load.image('macaronfraise', 'assets/junk_food/MacaronFraise.png');
        this.game.load.image('rouleefraise', 'assets/junk_food/RouleeFraise.png');
        this.game.load.image('tartefraise', 'assets/junk_food/TarteFraise.png');
        this.game.load.image('tartemeringueefraise', 'assets/junk_food/TarteMeringueeFraise.png');
    
        this.game.load.image('beignet', 'assets/junk_food/Beignet.png');
        this.game.load.image('bolo', 'assets/junk_food/Bolo.png');
        this.game.load.image('burger', 'assets/junk_food/Burger.png');
        this.game.load.image('cookie', 'assets/junk_food/Cookie.png');
        this.game.load.image('croissant', 'assets/junk_food/Croissant.png');
        this.game.load.image('croisschoco', 'assets/junk_food/CroissChoco.png');
        this.game.load.image('croque', 'assets/junk_food/Croque.png');
        this.game.load.image('cupxmas', 'assets/junk_food/CupcakeXMAS.png');
        this.game.load.image('donutrose', 'assets/junk_food/DonutRose.png');
        this.game.load.image('entrecote', 'assets/junk_food/Entrecote.png');
        this.game.load.image('guacamole', 'assets/junk_food/Guacamole.png');
        this.game.load.image('hotdog', 'assets/junk_food/Hotdog.png');
        this.game.load.image('maki', 'assets/junk_food/Maki.png');
        this.game.load.image('muffinchoco', 'assets/junk_food/MuffinChoco.png');
        this.game.load.image('pain2', 'assets/junk_food/Pain2.png');
        this.game.load.image('petitpain', 'assets/junk_food/PetitPain.png');
        this.game.load.image('pizza', 'assets/junk_food/Pizza.png');
        this.game.load.image('poulet', 'assets/junk_food/Poulet.png');
        this.game.load.image('roti', 'assets/junk_food/Roti.png');
        this.game.load.image('saucisse', 'assets/junk_food/Saucisse.png');
        this.game.load.image('sushi', 'assets/junk_food/Sushi.png');
        this.game.load.image('tacos', 'assets/junk_food/Tacos.png');
    
        this.game.load.image('biscuits', 'assets/junk_food/Biscuits.png');
        this.game.load.image('brochette', 'assets/junk_food/Brochette.png');
        this.game.load.image('chips', 'assets/junk_food/Chips.png');
        this.game.load.image('miel', 'assets/junk_food/Miel.png');
        this.game.load.image('nouilles', 'assets/junk_food/Nouilles.png');
        this.game.load.image('sauce', 'assets/junk_food/Sauce.png');
        this.game.load.image('sucette', 'assets/junk_food/Sucette.png');
        this.game.load.image('sushi2', 'assets/junk_food/Sushi2.png');
        this.game.load.image('sushi3', 'assets/junk_food/Sushi3.png');
    
    
        //---------------------------HEALTHY_FOOD-----------------------\\
    
    
        this.game.load.image('brocolie', 'assets/healthy_food/Brocoli.png');
        this.game.load.image('ananas', 'assets/healthy_food/Ananas.png');
    
        this.game.load.image('ail', 'assets/healthy_food/Ail.png');
        this.game.load.image('asperge', 'assets/healthy_food/Asperge.png');
        this.game.load.image('aubergine', 'assets/healthy_food/Aubergine.png');
        this.game.load.image('brocoli', 'assets/healthy_food/Brocoli.png');
        this.game.load.image('carotte', 'assets/healthy_food/Carotte.png');
        this.game.load.image('champi', 'assets/healthy_food/Champi.png');
        this.game.load.image('choufleur', 'assets/healthy_food/ChouFleur.png');
        this.game.load.image('chourave', 'assets/healthy_food/ChouRave.png');
        this.game.load.image('chourouge', 'assets/healthy_food/ChouRouge.png');
        this.game.load.image('concombre', 'assets/healthy_food/Concombre.png');
        this.game.load.image('blette', 'assets/healthy_food/Blette.png');
        this.game.load.image('mais', 'assets/healthy_food/Mais.png');
        this.game.load.image('oignon', 'assets/healthy_food/Oignon.png');
        this.game.load.image('oignonrouge', 'assets/healthy_food/OignonRouge.png');
        this.game.load.image('pdt', 'assets/healthy_food/PDT.png');
        this.game.load.image('pdt2', 'assets/healthy_food/PDT2.png');
        this.game.load.image('petitpois', 'assets/healthy_food/PetitPois.png');
        this.game.load.image('piment', 'assets/healthy_food/Piment.png');
        this.game.load.image('poireau', 'assets/healthy_food/Poireau.png');
        this.game.load.image('poivron', 'assets/healthy_food/Poivron.png');
        this.game.load.image('poivronjaune', 'assets/healthy_food/PoivronJaune.png');
        this.game.load.image('radis', 'assets/healthy_food/Radis.png');
        this.game.load.image('betterave', 'assets/healthy_food/Betterave.png');
        this.game.load.image('tomate', 'assets/healthy_food/Tomate.png');
    
        this.game.load.image('amande', 'assets/healthy_food/Amande.png');
        this.game.load.image('banane', 'assets/healthy_food/Banane.png');
        this.game.load.image('cerise', 'assets/healthy_food/Cerise.png');
        this.game.load.image('tomate', 'assets/healthy_food/Tomate.png');
        this.game.load.image('fraise', 'assets/healthy_food/Fraise.png');
        this.game.load.image('framboise', 'assets/healthy_food/Framboise.png');
        this.game.load.image('mure', 'assets/healthy_food/Mure.png');
        this.game.load.image('myrtille', 'assets/healthy_food/Myrtille.png');
        this.game.load.image('noisette', 'assets/healthy_food/Noisette.png');
        this.game.load.image('noix', 'assets/healthy_food/Noix.png');
        this.game.load.image('noix2', 'assets/healthy_food/Noix2.png');
        this.game.load.image('pain', 'assets/healthy_food/Pain.png');
        this.game.load.image('pasteque', 'assets/healthy_food/Pasteque.png');
        this.game.load.image('pistache', 'assets/healthy_food/Pistache.png');
        this.game.load.image('pomme', 'assets/healthy_food/Pomme.png');
        this.game.load.image('raisin', 'assets/healthy_food/Raisin.png');
    
        this.game.load.image('citron', 'assets/healthy_food/Citron.png');
        this.game.load.image('melon', 'assets/healthy_food/Melon.png');
        this.game.load.image('orange', 'assets/healthy_food/Orange.png');
        this.game.load.image('poire', 'assets/healthy_food/Poire.png');
    
    
    
	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}