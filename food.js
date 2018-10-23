function Food(x,y,board) {
    this.x=x;
    this.y=y;
    this.board = board;
    this.render = function (canvas) {
        var context = canvas.getContext('2d');

        context.beginPath();
        //context.clearRect(0,0,500,500);
        context.fillStyle = 'black';
        context.arc(this.x,this.y,7,0,2*Math.PI);
        context.fill();
    }
}

