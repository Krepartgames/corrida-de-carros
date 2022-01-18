class Player{
    constructor(){
        this.name = null 
        this.distance = 0
        this.index = null
    }
    getCount(){
        var refCount = database.ref("playerCount")
        refCount.on("value",function (data) {
              playerCount = data.val()
        })
    }

    updateCount(num){
        database.ref("/").update({
            playerCount: num
        })
    }

    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerinfo(){
        var refInfo = database.ref("players")
        refInfo.on("value",function (data) {
              allPlayers = data.val()
        })
    }
}