window.addEventListener("load", function(): void{ /* void = "Platzhalter" */
  
  /* Variablen */
  var sound: HTMLAudioElement [] = [new Audio ("./assets/kick.mp3"), new Audio ("./assets/snare.mp3"), new Audio ("./assets/hihat.mp3"), new Audio ("./assets/A.mp3"), new Audio ("./assets/C.mp3"), new Audio ("./assets/F.mp3"), new Audio ("./assets/G.mp3"), new Audio ("./assets/laugh-1.mp3"), new Audio ("./assets/laugh-2.mp3")];
  var beat: HTMLAudioElement [] = [new Audio ("./assets/kick.mp3"), new Audio ("./assets/snare.mp3"), new Audio ("./assets/hihat.mp3")];
  var remix: HTMLAudioElement [] = [new Audio ("./assets/kick.mp3"), new Audio ("./assets/snare.mp3"), new Audio ("./assets/hihat.mp3"), new Audio ("./assets/A.mp3"), new Audio ("./assets/C.mp3"), new Audio ("./assets/F.mp3"), new Audio ("./assets/G.mp3"), new Audio ("./assets/laugh-1.mp3"), new Audio ("./assets/laugh-2.mp3")];
  var index: number = 0;

  /* zentrale Funktion: playSample */

  function playSample (sound: HTMLAudioElement): void{ 
    sound.play();
  }

   document.querySelector(".button1").addEventListener("click", function(){(sound[0]).play()}) /* Knopfbelegung Anfang */
   document.querySelector(".button2").addEventListener("click", function(){(sound[1]).play()})
   document.querySelector(".button3").addEventListener("click", function(){(sound[2]).play()})
   document.querySelector(".button4").addEventListener("click", function(){(sound[3]).play()})
   document.querySelector(".button5").addEventListener("click", function(){(sound[4]).play()})
   document.querySelector(".button6").addEventListener("click", function(){(sound[5]).play()})
   document.querySelector(".button7").addEventListener("click", function(){(sound[6]).play()})
   document.querySelector(".button8").addEventListener("click", function(){(sound[7]).play()})
   document.querySelector(".button9").addEventListener("click", function(){(sound[8]).play()}) /* Knopfbelegung Ende */ 
   
   /* Knopfbelegung "Play-Button" */

   document.querySelector("#play").addEventListener("click", function playBeat(): void{ 

    var beatIntervall: number = setInterval(function(): void{ /* zum Beenden des Beats erforderlich */
      
      remix[index].play(); /* Beat wird jetzt mit Delete gelöscht*/
      index++;

      if (index > 2)
        index = 0;
      }, 500);

      document.querySelector("#stop").addEventListener("click", function(): void{
        clearInterval(beatIntervall);
      }) ;
    })

    /* Play-Button = Stop-Button */

    document.querySelector("#play").addEventListener("click", function(): void{
      document.querySelector("#play").classList.add("isHidden");
      document.querySelector("#stop").classList.remove("isHidden");
    });
  
    document.querySelector("#stop").addEventListener("click", function(): void{
      document.querySelector("#stop").classList.add("isHidden");
      document.querySelector("#play").classList.remove("isHidden");
    });

    /* Funktion des Delete-Buttons */

    document.querySelector("#delete").addEventListener("click", function(): void{
      remix.length = 0;
    });

    /* Remix-Button */

    document.querySelector("#remix").addEventListener("click", function(): void{

      beat.length = 0;
      setInterval(function(): void{

        playSample(remix[index]);
        index = Math.floor(Math.random() * 9);
      }, 500);
    });
})