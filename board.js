function Board(canvas) {
    this.canvas = canvas;


    this.render = function () {
        var context = this.canvas.getContext('2d');
        context.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.snake.render(canvas);
        this.food.render(canvas);
    }



}