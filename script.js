const screens = document.querySelectorAll(".screen");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

function showScreen(index){

    screens.forEach(screen=>screen.classList.remove("active"));

    screens[index].classList.add("active");

}

startBtn.onclick=()=>{

    showScreen(1);

}

nextBtn.onclick=()=>{

    showScreen(2);

}

finishBtn.onclick=()=>{

    confetti({

        particleCount:250,
        spread:180,
        origin:{y:.6}

    });

    document.getElementById("message").innerHTML="Ce penal ar fi sa nu functioneze ";

    finishBtn.innerHTML=":)))";
}
