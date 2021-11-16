const cards = [ "s2","s3","s4","s5","s6","s7","s8","s9","sA","sB","sC","sD","sE",
                "c2","c3","c4","c5","c6","c7","c8","c9","cA","cB","cC","cD","cE",
                "h2","h3","h4","h5","h6","h7","h8","h9","hA","hB","hC","hD","hE",
                "d2","d3","d4","d5","d6","d7","d8","d9","dA","dB","dC","dD","dE"];

shuffle
printCards(cards);
draw();
printCards(cards);

let hands = drawPoker();
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

function draw()
{
    shuffle();
    var e = document.getElementById("tilt");
    var card = cards.shift();
    //getCardName(card);

    e.innerHTML = getCardName(card);
    return getCardName(card);
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
        process.stdout.write(array[i] + ", ");
        if(i == 13 || i == 26 || i == 39 || i == 52)
        {
            console.log();
        }
    }

}
