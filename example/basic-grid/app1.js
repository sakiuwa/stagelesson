Stage(function(stage) {

  var Math = Stage.Math, Mouse = Stage.Mouse;

  //set the viewbox to be 500 by 500
  stage.viewbox(500, 500);

  var j = 0, i = 0;
  //create a variable column and append it to stage
  var column = Stage.column().appendTo(stage)

  //pin the column with alignment 0.5 and spacing 1
  .pin('align', 0.5).spacing(1);

  for (j = 0; j < 9; j++) {

    //create a variabl row and append it to column with spacing 1
    var row = Stage.row().appendTo(column).spacing(1)

    for (i = 0; i < 9; i++) {
      
      //create a variable cell and set animate to 'rainbow'
      var cell = Stage.anim('rainbow')

      //append cell to row and pin it with pivot 0.5
      .appendTo(row).pin('pivot', .05);

      cell.on(Mouse.MOVE, function(point) {
          this.gotoFrame(Math.random(this.length()));
          this.tween(Math.random(2000, 5000)).pin({

            //set X scale to be betwwen random 0.5 and 1.5
            scaleX : Math.random(0.5, 1.5),

            //set Y scale to be between random 0.5 and 1.5
            scaleY : Math.random(0.5, 1.5),

            //set X to skew between random  0 and 0.5
            skewX : Math.random(0, 0.5),

            //set Y skew between random  0 and 0.5
            skewY : Math.random(0, 0.5),

            //set rotation to be betwwen  random -5 and 5
            rotation : Math.random(-5, 5),

            //set X to pivot between random  0.2 and 0.8
            pivotX : Math.random(0.2, 0.8),

            //set Y to pivot between random  0.2 and 0.8
            pivotY : Math.random(0.2, 0.8)

          });

        return true;
      });
    }
  }

});