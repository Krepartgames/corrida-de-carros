class Game {
    constructor(){
    }
     getMode() {
        var refMode = database.ref("gameMode")
        refMode.on("value",function (data) {
            gameMode = data.val();
        })
    }

    update(mode){
        database.ref("/").update({
            gameMode: mode
        })
    }

    async start(){
        if (gameMode == 0){
            player = new Player()
            var refPlayerCount = await database.ref("playerCount").once("value")
            if (refPlayerCount.exists()){
                playerCount = refPlayerCount.val()
                player.getCount()
            }
            form = new Form()
            form.display()

            car1 = createSprite(100,200)
            car2 = createSprite(300,200)
            car3 = createSprite(500,200)
            car4 = createSprite(700,200)
            cars = [car1,car2,car3,car4]

            car1.visible = false
            car2.visible = false
            car3.visible = false
            car4.visible = false
        }
    }

    play(){
        background(100)
        Image(TrackSpr, 0, -displayHeight*3.5, displayWidth, displayHeight*5)
        form.hide()
        drawSprites()
        Player.getPlayerinfo()
        
        if (allPlayers !== undefined){
           var index = 0;
           var X = 200;
           var Y ; 

            for (var plr in allPlayers){
                index += 1
                X += 200
                Y = displayHeight/2 - allPlayers[plr].distance

                cars[index-1].x = X
                cars[index-1].y = Y
                
                if (index === player.index){
                    cars[index-1].shapeColor = "Red"
                    camera.position.x = displayWidth/2
                    camera.position.y = cars[index-1].y
                }

            }

            car1.visible = true
            car2.visible = true
            car3.visible = true
            car4.visible = true

        }

        if (keyDown("up") && player.index !== null){
            player.distance += 50 
            player.update()
        }
    }
}