// Check if the user is ready to play!
confirm("Are you ready to play? Click OK to continue!")
var age= prompt("What's your age?"); 
console.log(age);
if (age < 13) {confirm ("You are less than 13 years of age. You are still allowed to play, however we take no responsibility.") }
else { confirm("Congrats you're about to begin playing! Press ok to continue.")} 

alert ("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")
alert ("Suddenly, Bieber stops and says, 'Who wants to race me?'")
var userAnswer = prompt("Do you want to race Beiber on stage?") 
if (userAnswer === "yes") {alert ("You and Bieber start racing. It's neck and neck! You win by a shoelace!")}
else {alert ("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")}

var feedback = prompt ("Please give the game a rating out of 10. 0 = you totally disliked the game & 10 = you really enjoyed it!")
console.log (feedback);
if (feedback > 8) {alert ("Thank you! We should race at the next concert!")}
else {alert ("I'll keep practicing coding and racing.")}

