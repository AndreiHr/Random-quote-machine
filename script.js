$(document).ready(function()
           {
var quotes = 
 ["Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present. -Marcus Aurelius", 
"Warriors should suffer their pain silently. -Erin Hunter", 
"Complaining does not work as a strategy. We all have finite time and energy. Any time we spend whining is unlikely to help us achieve our goals. And it won't make us happier. ― Randy Pausch",
"It is the power of the mind to be unconquerable - Seneca",
"Until we have begun to go without them, we fail to realize how unnecessary many things are. We've been using them not because we needed them but because we had them. -Seneca",
"It is not the man who has too little that is poor, but the one who hankers after more. - Seneca",
"From the philosopher Catulus, never to be dismissive of a friend's accusation, even if it seems unreasonable, but to make every effort to restore the relationship to its normal condition. - Marcus Aurelius", 
"What really frightens and dismays us is not external events themselves, but the way in which we think about them. It is not things that disturb us, but our interpretation of their significance. - Epictetus", 
"A Stoic is someone who transforms fear into prudence, pain into transformation, mistakes into initiation, and desire into undertaking - Nassim Nicholas Taleb", 
"Misfortune nobly born is good fortune. - Marcus Aurelius", 
"Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company. - Seneca",
"The things you think about determine the quality of your mind. - Marcus Aurelius",
"Philosophy does not promise to secure anything external for man, otherwise it would be admitting something that lies beyond its proper subject-matter. For as the material of the carpenter is wood, and that of statuary bronze, so the subject-matter of the art of living is each person's own life - Epictetus", 
"Seek not for events to happen as you wish but rather wish for events to happen as they do and your life will go smoothly. - Epictetus", 
"Stop wandering about! You aren't likely to read your own notebooks, or ancient histories, or the anthologies you've collected to enjoy in your old age. Get busy with life's purpose, toss aside empty hopes, get active in your own rescue-if you care for yourself at all-and do it while you can. - Marcus Aurelius", 
"All cruelty springs from weakness. - Seneca",
"Difficulties strengthen the mind, as labor does the body. - Seneca" ];
  
  $(".qqq").on("click", function(){
  $(".quote").html(quotes[Math.floor(Math.random()*quotes.length)]);
  
});
  
});


