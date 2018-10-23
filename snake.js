
function Snake(x,y,board) {
    this.x= x;
    this.y = y;
    this.board = board;
    this.cell = [];
    this.setX = function (x) {
        this.x = x;
    };
    this.setY = function (y) {
        this.y = y;
    };
    this.render  = function (canvas) {
        var context = canvas.getContext('2d');
        context.clearRect(0,0,500,500);
        context.beginPath();
        context.fillStyle = 'red';
        context.fillRect(this.x,this.y,20,20);
        context.fill();
    };
    this.moveRight = function () {
        this.x +=20;
        if (this.x>=480){
            this.x=480;
        }
        this.render(canvas)
    };
    this.moveLeft = function () {
        this.x -=20;
        if (this.x<=10){
            this.x=0;
        }
        this.render(canvas)
    };
    this.moveDown = function () {
        this.y +=20;
        if (this.y>=480){
            this.y=480;
        }
        this.render(canvas)
    };
    this.moveUp = function () {
        this.y -=20;
        if (this.y<=10){
            this.y=0;
        }
        this.render(canvas)
    };
    function updateSnake() {

    }


}



