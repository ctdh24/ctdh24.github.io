var random_sayings = [
  "not really",
  "nope",
  "try again later",
  "sure",
  "maybe",
  "no",
  "I don't think so",
  "something might happen",
  "eh...",
  "42",
];

function pick_random_saying(sayings){
  var saying_count = sayings.length;
  var random_saying_id = Math.floor(Math.random()*saying_count);
  var random_text = sayings[random_saying_id];
  $('.eightball_text').text(random_text);
}
$(document).ready(function(){
    $('#eightball').click(function(){
    pick_random_saying(random_sayings);
  });  
});