let point;
let liv;
let gameTimer;
let erSpilletStoppet = false;

window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#play").addEventListener("click", startGame);





}

function startGame() {
    console.log("startGame");


    //sætter den boolean variabel til false (spillet er ikke slut)
    erSpilletStoppet = false;

    // Resetter timeren så tiden starter forfra
    clearTimeout(gameTimer);

    // Starter timeren på 30 sekunder
    gameTimer = setTimeout(checkStatus, 19000);

    // Skujler startskræm, level complete og game over//
    document.querySelector("#start").style.display = "none";
    document.querySelector("#game_over").style.display = "none";
    document.querySelector("#level_complete").style.display = "none";

    //Nulstil point og liv
    point = 0;
    liv = 3;

    document.querySelector("#score_board").textContent = point;
    document.querySelector("#chilli1").classList.remove("hide");
    document.querySelector("#chilli2").classList.remove("hide");
    document.querySelector("#chilli3").classList.remove("hide");

    //position


    document.querySelector("#net_container").classList.add("position3");
    document.querySelector("#taco_container").classList.add("position1");
    document.querySelector("#hotsauce_container").classList.add("position2");
    document.querySelector("#taco_container2").classList.add("position5");
    document.querySelector("#hotsauce_container2").classList.add("position6");
    document.querySelector("#haj_container").classList.add("position8");



    //Fall animation


    document.querySelector("#net_container").classList.add("fall");


    document.querySelector("#taco_container").classList.add("fall");
    document.querySelector("#taco_container2").classList.add("fall");

    document.querySelector("#hotsauce_container").classList.add("fall");
    document.querySelector("#hotsauce_container2").classList.add("fall");

    document.querySelector("#haj_container").classList.add("fall");



    //Fade in animation på haj

    //klik haj/net
    document.querySelector("#haj_container").addEventListener("click", evilClick);
    document.querySelector("#net_container").addEventListener("click", evilClick);



    //klik på taco/net
    document.querySelector("#taco_container").addEventListener("click", goodClick);
    document.querySelector("#taco_container2").addEventListener("click", goodClick);

    document.querySelector("#hotsauce_container").addEventListener("click", goodClick);
    document.querySelector("#hotsauce_container2").addEventListener("click", goodClick);


    //Klik og genstart
    //this.addEventListener("animationiteration", genStart);

    document.querySelector("#haj_container").addEventListener("animationiteration", hajStart);

    document.querySelector("#net_container").addEventListener("animationiteration", genStart);


    document.querySelector("#taco_container").addEventListener("animationiteration", genStart);
    document.querySelector("#taco_container2").addEventListener("animationiteration", genStart);


    document.querySelector("#hotsauce_container").addEventListener("animationiteration", genStart);
    document.querySelector("#hotsauce_container2").addEventListener("animationiteration", genStart);


    //reset timer animation

    document.querySelector("#time_sprite").classList.remove("ur");
    document.querySelector('#time_sprite').offsetHeight;
    document.querySelector("#time_sprite").classList.add("ur");


}

function evilClick() {
    console.log("evilClick");


    //klik på haj animation

    //    document.querySelector("#haj_container").classList.add("pulse");



    //klik på net/haj -> clickNet/haj
    this.removeEventListener("click", evilClick);



    //Vis samlet antal liv

    document.querySelector("#chilli" + liv).classList.add("hide");

    //Klik-> Mist et liv
    liv--;

    if (liv == 0) {
        gameOver();
    }

    //console.log("liv" + liv);
    //lyd

    //forsvinder
    this.classList.add("dissappear");
    document.querySelector("#haj_container").classList.add("dissappear");



    document.querySelector("#haj_container").addEventListener("animationend", genStart);

    document.querySelector("#net_container").addEventListener("animationend", genStart);
    document.querySelector("#net_container2").addEventListener("animationend", genStart);



}




function goodClick() {
    console.log("goodClick");
    this.removeEventListener("click", goodClick);


    //klik taco->Få et point
    point++;
    console.log("point:" + point);

    //lyd

    //Vis samlet antal point
    document.querySelector("#score_board").textContent = point;




    //forsvinder
    this.classList.add("dissappear");
    this.classList.remove("fall");
    this.addEventListener("animationend", genStart);



}

function genStart() {
    //nyt objekt

    console.log("genstart");

    this.removeEventListener("animationend", genStart);

    //Fjern alle positioner

    this.classList.remove("position1");
    this.classList.remove("position2");
    this.classList.remove("position3");
    this.classList.remove("position4");
    this.classList.remove("position5");
    this.classList.remove("position6");
    this.classList.remove("position7");
    this.classList.remove("position8");
    this.classList.remove("position9");


    //giv random placering

    let myRandom = Math.floor(Math.random() * 8 + 1);
    this.classList.add("position" + myRandom);

    //vis igen
    this.classList.remove("dissappear");

    this.offsetHeight;

    this.classList.add("fall");



    //klik igen

    document.querySelector("#net_container").addEventListener("click", evilClick);
    document.querySelector("#haj_container").addEventListener("click", evilClick);

    document.querySelector("#taco_container").addEventListener("click", goodClick);
    document.querySelector("#taco_container2").addEventListener("click", goodClick);


    document.querySelector("#hotsauce_container").addEventListener("click", goodClick);
    document.querySelector("#hotsauce_container2").addEventListener("click", goodClick);

}



function checkStatus() {
    console.log("checkStatus");

    //checkstatus
    if (erSpilletStoppet == false) {
        if (point >= 10) {
            levelComplete();

        } else {

            gameOver();

        }
    }
    //Sluk alle eventlistnere

    document.querySelector("#taco_container").removeEventListener("click", goodClick);
    document.querySelector("#taco_container2").removeEventListener("click", goodClick);
    document.querySelector("#hotsauce_container").removeEventListener("click", goodClick);
    document.querySelector("#hotsauce_container2").removeEventListener("click", goodClick);


    document.querySelector("#haj_container").removeEventListener("click", evilClick);
    document.querySelector("#net_container").removeEventListener("click", evilClick);





    //clearTimeout(gameTime);
}



function levelComplete() {
    document.querySelector("#level_complete").style.display = "inLine";
    document.querySelector("#spiligen_container2").classList.add("pulse");
    document.querySelector("#spiligen_container2").addEventListener("click", startGame);


    erSpilletStoppet = true;





}

function gameOver() {


    document.querySelector("#game_over").style.display = "inLine";
    document.querySelector("#spiligen_container").classList.add("pulse");
    document.querySelector("#spiligen_container").addEventListener("click", startGame);



    erSpilletStoppet = true;

    //pauseGame();


}
