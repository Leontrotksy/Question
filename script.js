const yes=document.querySelector("#SoHappy");
const no=document.querySelector("#Dam");
const container=document.querySelector("#container");
    yes.addEventListener("click", function(e){
        const couple=document.createElement("img");
        couple.src="./images/race.jpg";
        container.appendChild(couple);
        const joy=document.createElement("div");
        joy.innerText="This is literraly gonna be us";
        const fun=document.createElement("div");
        fun.innerText="Yay";
        container.appendChild(joy); container.appendChild(fun);
        no.remove();
        yes.remove();
    });
    no.addEventListener("click",function(e){
        const couple=document.createElement("img");
        couple.src="./images/race.jpg";
        container.appendChild(couple);
        const pain=document.createElement("div");
        pain.innerText="Is it because we would look like this?";
        container.appendChild(pain);
        const shucks=document.createElement("div");
        container.appendChild(shucks);
        shucks.innerText="Best wishes though";
        no.remove();
        yes.remove();
    });