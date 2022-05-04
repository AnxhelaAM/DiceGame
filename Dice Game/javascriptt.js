
const button=document.getElementById("Button");
const result=document.getElementById("Result")
let score1=document.getElementById("score1");
let score2=document.getElementById("score2");

button.addEventListener('click',function(){
    const player1=Math.floor(Math.random()*6)+1;  
    const player1Dice=`dice${player1}.png`;        
    document.getElementById("img1").setAttribute('src',player1Dice);  
    const player2=Math.floor(Math.random()*6)+1;
    const player2Dice=`dice${player2}.png`;
    document.getElementById("img2").setAttribute('src',player2Dice);
    let result1=parseInt(score1.value);       
    score=player1+result1;
    score1.setAttribute('value',`${score}`);
    let result2=parseInt(score2.value);        
    score4=player2+result2;
    score2.setAttribute('value',`${score4}`);
    console.log(score1.value);
    console.log(score2.value);
        if(score1.value>=100){
            result.innerText="Player1 Won!"
            button.innerText="Play Again";
            button.addEventListener('click',function(){
                location.reload();
            })   
        }else if(score2.value>=100){
            result.innerText="Player2 Won!"
            button.innerText="Play Again"
            button.addEventListener('click',function(){
                location.reload();
            })
        }else if(score1.value==100 & score2.value==100){
            result.innerText="Draw!"
            button.innerText="Play Again";
            button.addEventListener('click',function(){
                location.reload();
            })
        }
        
});