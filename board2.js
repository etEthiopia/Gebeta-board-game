var dict = {
    hole1 : 4,
    hole2 : 4,
    hole3 : 4,
    hole4 : 4,
    hole5 : 4,
    hole6 : 4,
    hole7 : 0,
    hole8 : 4,
    hole9 : 4,
    hole10 : 4,
    hole11 : 4,
    hole12 : 4,
    hole13 : 4, 
    hole14 : 0
}

var imageid = ["<img src='holegebeta.png'","<img src='holegebeta1.png'",
"<img src='holegebeta2.png'","<img src='holegebeta3.png'",
"<img src='holegebeta4.png'","<img src='holegebeta5.png'","<img src='holegebeta6.png'",
"<img src='holegebeta7.png'","<img src='holegebeta8.png'","<img src='holegebeta9.png'",
"<img src='holegebeta10.png'"];

var opp = {
    hole1 : "hole13",
    hole2 : "hole12",
    hole3 : "hole11",
    hole4 : "hole10",
    hole5 : "hole9",
    hole6 : "hole8",
    hole8 : "hole6",
    hole9 : "hole5",
    hole10 : "hole4",
    hole11 : "hole3",
    hole12 : "hole2",
    hole13 : "hole1" 
}
count = 1;
// var dictList = [hole1, hole2, hole3, hole4, hole5, hole6, mancala1, hole7, hole8, hole9, hole10, hole11, hole12, mancala2];

function holeClicked(hole){
    var num = parseInt(hole.slice(4, ), 10);
    if(count % 2 != 0 && num >= 8){
        alert("Player One's turn");
        return;
    }else if (count % 2 == 0 && num <= 6){
        alert("Player Two's turn");
        return;
    }
    while (dict[hole] != 0){
        dict[hole] -= 1;
        if (num == 14){
            num = 0;
        }
        if (count % 2 == 0 && num == 6){
            num += 1;
        }else if (count % 2 != 0 && num == 13){
            num = 0;
        }
        dict["hole" + (num + 1)] += 1;
        num += 1;

    }
    // alert(num);
    if(num == 7 || num == 14){
        alert("Last stone in mancala. Player gets another turn");
        const keyss = Object.keys(dict);
    var lh = 0; 
    while(lh < keyss.length){
        var currentkey = keyss[lh];
        var currentstatus = dict[currentkey];
        if(lh == 6 || lh == 13){
            document.getElementById(currentkey).innerHTML=imageid[currentstatus]+" class = mancalla>";  
        }
        else{
        document.getElementById(currentkey).innerHTML=imageid[currentstatus]+">";
        }
        lh++;
    }
        //alert(JSON.stringify(dict, null, 4));
        return;
    }
    if(dict["hole" + num] == 1){
        // alert("Here");
        if(num <= 7 && count % 2 != 0){
            var newHole = opp["hole" + num];
            // alert(dict["hole7"]);
            // alert(dict[newHole]);
            // alert(dict["hole" + num]);
            alert("The player has taken the opposite stones and placed it on his mancala.")                    
            dict["hole7"] += (dict["hole" + num] + dict[newHole]);
            dict["hole" + num] = 0;
            dict[newHole] = 0;
            const keyss = Object.keys(dict);
    var lh = 0; 
    while(lh < keyss.length){
        var currentkey = keyss[lh];
        var currentstatus = dict[currentkey];
        if(lh == 6 || lh == 13){
            document.getElementById(currentkey).innerHTML=imageid[currentstatus]+" class = mancalla>";  
        }
        else{
        document.getElementById(currentkey).innerHTML=imageid[currentstatus]+">";
        }
        lh++;
    }
        }
        else if(num >= 8 && count % 1 == 0){
            alert("The player has taken the opposite stones and placed it on his mancala.")                    
            var newHole = opp["hole" + num];
            dict["hole14"] += (dict["hole" + num] + dict[newHole]);
            dict["hole" + num] = 0;
            dict[newHole] = 0;
            const keyss = Object.keys(dict);
    var lh = 0; 
    while(lh < keyss.length){
        var currentkey = keyss[lh];
        var currentstatus = dict[currentkey];
        if(lh == 6 || lh == 13){
            document.getElementById(currentkey).innerHTML=imageid[currentstatus]+" class = mancalla>";  
        }
        else{
        document.getElementById(currentkey).innerHTML=imageid[currentstatus]+">";
        }
        lh++;
    }
        }
    }
    count += 1;
    setTimeout(changeImage,1000);
    //alert(keyss);
    //alert(JSON.stringify(dict, null, 4));

}
function changeImage(){
    const keyss = Object.keys(dict);
    var lh = 0; 
    while(lh < keyss.length){
        var currentkey = keyss[lh];
        var currentstatus = dict[currentkey];
        //setTimeout(function(){alert(imageid[currentstatus]+">")},2000);
        //setTimeout(function() {document.getElementById(currentkey).innerHTML=imageid[0]+">";},1000);
        if(lh == 6 || lh == 13){
            //document.getElementById(currentkey).innerHTML=imageid[currentstatus]+" class = mancalla>";  
            setTimeout(function() {document.getElementById(currentkey).innerHTML=imageid[currentstatus]+" class = mancalla>";},1000);
        }
        else if(lh == 0){
            //alert(currentkey);
            document.getElementById(currentkey).innerHTML=imageid[currentstatus]+">";
            setTimeout(function() {document.getElementById(currentkey).innerHTML=imageid[currentstatus]+">";},1000);
        }
        else{
            //alert(currentkey);
            document.getElementById(currentkey).innerHTML=imageid[currentstatus]+">";
            setTimeout(function() {document.getElementById(currentkey).innerHTML=imageid[currentstatus]+">";},1000);
        //document.getElementById(currentkey).innerHTML=imageid[currentstatus]+">";
        //setInterval(function(){alert(imageid[currentstatus]+">")},2000);
        //setTimeout(function() {document.getElementById(currentkey).innerHTML=imageid[currentstatus]+">";},1000);
        }
    
        lh++;
    }
    //setTimeout(function() {document.getElementById(currentkey).innerHTML=imageid[currentstatus]+" class = mancalla>";},1000)
}