(function(){
  var score = 0;

  fucntion increaseScore(){
      score++;
      console.log(score);
  }

  function decreaseScore(){
      score--;
  }

  function run(){
      increaseScore();
  }

  run();
}());
