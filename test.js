var quote1 =
  '"If you want to shine like the sun, first burn like the sun." - APJ Abdul Kalam';
var quote2 =
'"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson';
var quote3 = '"What matters most is how well you walk through the fire." - Charles Bukowski';
var quote4 = '"I know, somehow, that only when it is dark enough you can see the stars." - Martin Luther King Jr';
var quote5 =  '"Independence is happiness." - Susan B. Anthony';


var quoteArray = [quote1, quote2, quote3, quote4, quote5];

alert(
  "Hello! Please rate the following quotes with this system: whatever = 0, like = 1, love = 2!"
);

var noOpinion = 0;
var liked = 0;
var loved = 0;


for (var i = 0; i < quoteArray.length; i++) {
  let answer = prompt(quoteArray[i]);

  while (answer != 1 && answer != 2 && answer != 0) {
    answer = prompt(quoteArray[i]);
  }

  if (answer == 0) {

    if (noOpinion == 0) {
      document.getElementById("whatevertag").innerHTML += "These are the quotes you had no opinion about:" + "<br/>" + "<br/>";
      document.getElementById("whatever").innerHTML += quoteArray[i] + "<br/>" + "<br/>";
      var noOpinion = noOpinion + 1;
    }
    else {
    document.getElementById("whatever").innerHTML += quoteArray[i] + "<br/>" + "<br/>";
    var noOpinion = noOpinion + 1;
    }
  } 
  
  else if (answer == 1) {

    if (liked == 0) {
      document.getElementById("likedtag").innerHTML += "These are the quotes you liked:" + "<br/>" + "<br/>";
    document.getElementById("like").innerHTML += quoteArray[i] + "<br/>" + "<br/>";
    var liked = liked + 1;
    } else {

    document.getElementById("like").innerHTML += quoteArray[i] + "<br/>" + "<br/>";
    var liked = liked + 1;
  }
  } 
  
  else if (answer == 2) {
    if (loved ==0) {
      document.getElementById("lovedtag").innerHTML += "These are the quotes you loved:" + "<br/>" + "<br/>";
      document.getElementById("love").innerHTML += quoteArray[i] + "<br/>" + "<br/>";
      var loved = loved + 1;
    } else {
    document.getElementById("love").innerHTML += quoteArray[i] + "<br/>" + "<br/>";
    var loved = loved + 1;
    }
  }
}

var quoteGrammar1 = "quotes";
var quoteGrammar2 = "quotes";
var quoteGrammar3 = "quotes";

if (noOpinion == 1 ) {
  var quoteGrammar1 = "quote";
} 

if (liked ==1 ) {
  var quoteGrammar2 = "quote";
} 

if (loved == 1) {
  var quoteGrammar3 = "quote";
}


document.getElementById("overviewSection").innerHTML += "You liked " + liked + " " +  quoteGrammar2 + ", loved " + loved + " " + quoteGrammar3 + " and had no opinion about " + noOpinion + " " + quoteGrammar1 + "." + "<br/>";