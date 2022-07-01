const cards = [ "s2","s3","s4","s5","s6","s7","s8","s9","sA","sB","sC","sD","sE",
                "c2","c3","c4","c5","c6","c7","c8","c9","cA","cB","cC","cD","cE",
                "h2","h3","h4","h5","h6","h7","h8","h9","hA","hB","hC","hD","hE",
                "d2","d3","d4","d5","d6","d7","d8","d9","dA","dB","dC","dD","dE"];

//Most recent version comment for testing
shuffle();
var wins = 0;
var ties = 0;
var loses = 0;
var cardScale = 50;
var winner = false;
var input = [0];
input = getUrlIn(window.location.href);
var points = parseInt(input[0]);
var lossPoints = parseInt(input[1]);
var tiePoints = parseInt(input[2]);
var isMobile = detectMob();
var leaderFile = "./leaderboard.txt";



displayScore(points,lossPoints,tiePoints);
var openFile = function(event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function(){
          var text = reader.result;
          var node = document.getElementById('output');
          node.innerText = text;
          console.log(reader.result.substring(0, 200));
        };
        reader.readAsText(input.files[0]);
      };
if(isMobile)
{
    console.log("is mobile");
}

function detectMob() {
   const toMatch = [
       /Android/i,
       /webOS/i,
       /iPhone/i,
       /iPad/i,
       /iPod/i,
       /BlackBerry/i,
       /Windows Phone/i
   ];

   return toMatch.some((toMatchItem) => {
       return navigator.userAgent.match(toMatchItem);
   });
}
function displayScore(win, lose, tie)
{
    document.getElementById("points").innerHTML = '<div class="hippo"> Number of Wins: '+ points +'</div>';
    document.getElementById("loss").innerHTML = '<div class="hippo"> Number of Losses: '+ lose +'</div>';
    document.getElementById("tie").innerHTML = '<div class="hippo"> Number of Ties: '+ tie +'</div>';
}
function getAllIndex(string,chara)
{
    var str = string;
    var indices = [];
    for(var i=0; i<str.length;i++) {
        if (str[i] === chara) indices.push(i);
    }
    return indices;
}

function getUrlIn(url)
{
    var indices = getAllIndex(url,"&");
    var strings = [];
    var temp;
    if(url.includes("?"))
    {
        for(var i = 0; i < indices.length; i++)
        {
            temp = url.substring(indices[i],indices[i+1]);
            strings.push(temp.substring(temp.indexOf("=")+1,temp.length));
        }
        return strings;
    }else {
        return [0,0,0];
    }
}
//let hands = drawPoker();
function shuffle()
{
    for(var j = 0; j < 52; j++)
    {
        swapCard(j,getRandomInt(51));
    }
}
function drawPoker()
{
    let hand = [];
    for(var k = 0; k < 5; k++)
    {
        hand[k] = draw();
    }
    return hand;
}
function score()
{
    var output = "";
    var score = document.getElementById("score");
    output += (wins + "/" + loses + "/" + ties);
    score.innerHTML = output;
}

function draw()
{
    if (cards.length === 0)
    {
        var body = document.getElementById("body");
        var result = "";
        var output = "";
        var fancyURL = "";
        var colour = "";
        if(wins>loses)
        {
            colour = "light_green";
            result = "winner";
            points ++;
        }else if(wins == loses)
        {
            colour = "yellow";
            result = "tie";
            tiePoints++;
        }else{
            colour = "red";
            result = "loser";
            lossPoints++;
        }
        console.log(lossPoints);
        output += '<h1 class="spriteGR" style="color:'+ colour + '">' +result+ '</h1>';

        if(window.location.href.includes("?"))
        {
            fancyURL += (window.location.href.substring(0,window.location.href.indexOf("?")) + '?&score=' + points + '&loss=' + lossPoints + '&tie=' + tiePoints);
        }
        else{
            fancyURL = window.location.href + '?&score=' + points + '&loss=' + lossPoints + '&tie=' + tiePoints;
        }
        //output += "<br><a href=\'" + fancyURL + "\'>Reset</a>";
        output += "<br><a id=\"reset\" href=\"" + fancyURL+ "\">Click here to reset!</a>"
        console.log(output);
        body.innerHTML = output;
    }else{
        var e = document.getElementById("tilt");
        var card = cards.shift();
        e.innerHTML = getCardName(card);
        cardDisplay(card,"card",cardScale);
        enemyDraw(card);
        score();
        return getCardName(card);
    }
}
function enemyDraw(player)
{
    var e = document.getElementById("enemy");
    var f = document.getElementById("outcome");
    var card = cards.shift();
    var enemyPower = parseInt(card.slice(1),16);
    var playerPower = parseInt(player.slice(1),16);

    if(playerPower>enemyPower)
    {
        f.style.color = "#66FF33";
        f.innerHTML = "winner!";
        wins++;
    }else if(playerPower == enemyPower)
    {
        f.style.color = "yellow";
        f.innerHTML = "tie!"
        ties++;
    }else{
        f.style.color = "red";
        f.innerHTML = "loser!";
        loses++;
    }
    e.innerHTML = getCardName(card);
    cardDisplay(card,"enemy",cardScale)
    return card;
}
function cardDisplay(card,id,scale)
{
    document.getElementById(id).src="cards/"+card+".svg";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function swapCard(src,des)
{
    var tempSrc = cards[src];
    cards[src] = cards[des];
    cards[des] = tempSrc;
}

function getCardName(card)
{
    var output = "You drew the ";
    if(card.includes("2"))
    {
        output += ("2");
    }else if(card.includes("3"))
    {
        output += ("3");
    }else if(card.includes("4"))
    {
        output += ("4");
    }else if(card.includes("5"))
    {
        output += ("5");
    }else if(card.includes("6"))
    {
        output += ("6");
    }else if(card.includes("7"))
    {
        output += ("7");
    }else if(card.includes("8"))
    {
        output += ("8");
    }else if(card.includes("9"))
    {
        output += ("9");
    }else if(card.includes("A"))
    {
        output += ("10");
    }else if(card.includes("B"))
    {
        output += ("Jack");
    }else if(card.includes("C"))
    {
        output += ("Queen");
    }else if(card.includes("D"))
    {
        output += ("King");
    }else if(card.includes("E"))
    {
        output += ("Ace");
    }

    if(card.includes("h"))
    {
        output += (" of hearts");
    } else if(card.includes("s"))
    {
        output += (" of spades");
    } else if(card.includes("c"))
    {
        output += (" of clubs");
    } else if(card.includes("d"))
    {
        output += (" of diamonds");
    }
    output += ("!");
    return output;

}

function printCards(array)
{
    for(var i = 0; i < array.length; i++)
    {
        console.log(array[i] + ", ");
        if(i == 13 || i == 26 || i == 39 || i == 52)
        {
            console.log();
        }
    }

}
