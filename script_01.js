/* Die Satzbau-Maschine | Arrays */

/* 01. Funktionalität mit Einzelparametern*/
//  --> "Ich bin Max Mütze."

 function getSentence(wordOne, wordTwo, wordThree, wordFour)
{

const gap   = " ";
const punct = ".";
const str   = wordOne   + gap + 
              wordTwo   + gap + 
              wordThree + gap + 
              wordFour  + punct;

    return str;
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
 function output(outputStr)
{
    console.log(outputStr);
}

/**** 01a. Funktionalität mit Array 1 *******/
// Kritik || Überlegung
// output(getSentenceArr(["Ich","bin","Chris","Mf"]));
function getSentenceArr(arr)
{

const gap   = " ";
const punct = ".";
const str   = arr[0] + gap + 
              arr[1] + gap + 
              arr[2] + gap + 
              arr[3] + punct;

    return str;
}

/**** 02. Funktionalität mit for-loop *******/
//let arr = ["Ich","bin","Chris","Mf"];
// for (let i = 0; i < arr.length; i++) 
{
//    output(arr[i]);

}

/**** 01b. Funktionalität mit Array 2 *******/
// Bring das nicht wie sonst unter einander sondern neben einander durch  let str.
output(getSentenceArr2(["Ich","bin","Chris","Mf","und","bin","33","Jahre","alt"]));  //Input für das Array
function getSentenceArr2(arr)
{
const gap   = " ";
const punct = ".";
let str     = "" ;


for (let i = 0; i < arr.length; i++) 
{
    if (i != arr.length-1)                                      //damit die ein punkt am ende kommt und zwar direkt nach dem letzten Wort
    {
        str += arr[i] + gap;                                    //das += ist dass gleiche als würde ich "str = str + arr[1] + gap" schreiben
    } else 
    {
        str += arr[i] + punct;  
    }
 
}
    return str;
}