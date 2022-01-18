class Form {
    constructor(){
        this.input = createInput("name")
        this.button = createButton("Play")
        this.greetings = createElement("h3")
    }
    display(){
        var title = createElement("h2")
        title.html("Cart Game")
        title.position(displayWidth/2 - 50,0)

        this.input.position(displayWidth/2 - 80,displayHeight/2 - 150)

        this.button.position(displayWidth/2 - 20,displayHeight/2 - 100)

        this.button.mousePressed( ()=> {
            this.input.hide()
            this.button.hide()

            player.name = this.input.value()
            playerCount += 1 
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greetings.html("hello "+player.name)
            this.greetings.position(displayWidth/2 - 80,displayHeight/2 - 150)
        })
    }

    hide(){
        this.greetings.hide()
        this.button.hide()
        this.input.hide()
    }
}
