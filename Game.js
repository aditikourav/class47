class Game{
    constructor(){}
      
        getState(){
          var gameStateRef  = database.ref('gameState');
          gameStateRef.on("value",function(data){
             gameState = data.val();
          })
      
        }
      
        update(state){
          database.ref('/').update({
            gameState: state
          });
        }
      
        async start(){
          if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form()
            form.display();
}

          boy1 = createSprite(100,200,10,20);
          boy1.addImage(boy1Img);
          boy1.scale = 0.3;

          boy2 = createSprite(100,400,10,20);
          boy2.addImage(boy2Img);
          boy2.scale = 0.3;

          boys =[boy1,boy2]
        }

       play(){
           form.hide();

           Player.getPlayerInfo();

           var x = 100;
           var y ;

     
           if(allPlayers !== undefined){
               var index = 0;
               for(var plr in allPlayers){
               //add 1 to the index for every loop
               index = index +1;

               if(keyDown(UP_ARROW)){
                   y = allPlayers[plr].distance-3;

               }
               else if(keyDown(DOWN_ARROW)){
                y = allPlayers[plr].distance+3;

               }
                
                boys[index-1].x = x;
                boys[index-1].y = y;

           }
        }
           drawSprites();
       }

       
    
}