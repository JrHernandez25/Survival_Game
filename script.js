//console.log("Hello World");

//alert("Before you begin the game you get to pick a name for your character");

//var username = prompt("Enter Your character's name")

//alert('Alright lets get you into the game ' + username);

//alert("You wake up next to a camp fire only to find out you have been tied up and all your gear and money have been stolen. You kind of wonder why the theifs didn't kill you but you quickly snap out of your thoughts and start looking for ways to get your self untied. You see next to the campfire a dull knife that could be used to cut yourself out the ropes, but you also remember that you can whistle for you wolf pet to come get you out of the rope.")

// var numb = prompt("So what is it going to be either 1)The knife or 2)Call for your pet wolf")

// if(numb == 1){
//     alert("You choose to use the dull knife, it takes a few hours but the knife is eventually able to cut you free so you pick yourself up and head over to an abandon military base where you know you can find things that you can craft a weapon.")
// }
// else if(numb == 2){
//     alert("Did you hit your head? What made you think that you could tame a wolf so instead you use the dull knife to cut yourself free. After a while your free and so you start walking towards a military base that you know will have supplies in order to craft a weapon.")
// }

// alert("You arrived to the military base. So you start looking for anything that could possibly used to make a weapon. Eventually after a while you find a couple of things to make a weapon with.")

// var numb = prompt("You have four options of weapons to craft, what will you choose? 1)A Diamond filet knife 2)Garbage Bomb 3)Fixing an M4 Carbine 4)A Radioactive Tuna Fish Sandwhich")

// if(numb == 1){
//     alert("")
// }
let btn = document.createElement("button");
btn.innerHTML = "Start";
btn.onclick = function () {
    alert("Before you begin the game you get to pick a name for your character");

    var username = prompt("Enter Your character's name")
    
    alert('Alright lets get you into the game ' + username);
    
    alert("You wake up next to a camp fire only to find out you have been tied up and all your gear and money have been stolen. You kind of wonder why the theifs didn't kill you but you quickly snap out of your thoughts and start looking for ways to get your self untied. You see next to the campfire a dull knife that could be used to cut yourself out the ropes, but you also remember that you can whistle for you wolf pet to come get you out of the rope.")
    
    var numb = prompt("So what is it going to be either 1)The knife or 2)Call for your pet wolf")
    
    if(numb == 1){
        alert("You choose to use the dull knife, it takes a few hours but the knife is eventually able to cut you free so you pick yourself up and head over to an abandon military base where you know you can find things that you can craft a weapon.")
    }
    else if(numb == 2){
        alert("Did you hit your head? What made you think that you could tame a wolf so instead you use the dull knife to cut yourself free. After a while your free and so you start walking towards a military base that you know will have supplies in order to craft a weapon.")
    }
    
    alert("You arrived to the military base. So you start looking for anything that could possibly used to make a weapon. Eventually after a while you find a couple of things to make a weapon with.")
    
    var numb = prompt("You have four options of weapons to craft, what will you choose? 1)A Diamond filet knife 2)Garbage Bomb 3)Fixing an M4 Carbine 4)A Radioactive Tuna Fish Sandwhich")

    if(numb == 1){
        alert("You managed to craft a sharp knife but as you were finishing you noticed a group of bandits that were quickly walking towards your position.")
        var numb = prompt("What will you do, 1)Will you fight or 2)will you run away.")
        if(numb == 1){
           alert("You ambushed the bandits but in your first strike the knife shattered, the bandits took it as an oppurtunity and brutaly murdered you") 
        }
        else if(numb == 2){
            alert("You decided on sneaking away, but as you were walking you bumped into a pile of boxes making noise. You immediatly alerted the bandits causing you to be chased into the woods.")
            var numb = prompt("While navigating through the woods you came across an old road and across the road was an abandond house. The gang of bandits were right behind you so you must decide quickly. 1)Will you hide in the house or 2)Run down the road.")
            if(numb == 2){
                alert("You start to run down the road, only thing is there is many cracks in the road so you trip over. The bandits are able to catch up to you and take you away were you are used as feeding for there dogs.")
            }
            else if(numb == 1){
                alert("You take refuge in the house. While waiting you fell asleep inside the house.")
            }
        }
    }
    else if(numb == 2){
        alert("You managed to make a garbage bomb, but as you were finishing up a gang of bandits were aproaching were you were")
        var numb = prompt("What will you do 1)Will you fight or 2)will you run away")
        if(numb == 1){
            alert("You worked up the courage to light the fuse of the bomb but, the bomb ends up blowing you up.(I forgot to mention you suck at throwing)")
        }
        else if(numb == 2){
            alert("You decide to run away but one of the bandits pulls out a makeshift pistol which he uses to shoot at you. It magically passes by the fuse lighting it and killing you")
        }
    }
    else if(numb == 3){
        alert("You somehow found the right parts to repair an old M4 Carbine. As you were finishing up a group of bandits approached the military base.")
        var numb = prompt("What will you do 1)Will you fight or 2)will you run away")
        if(numb == 1){
            alert("As you were prepearing yourself to fight the group you remembered that you forgot to gather bullets from the old armory, so you decided to run away into the woods.(You will have to return later to gather some ammunition)")
            var numb = prompt("As you were getting chased by the group you stumbled across an old road and across the road was an old house that was in running distance. You have to decide quickly 1)Will you run down the road or 2)Hide in the house")
            if(numb == 1){
                alert("In a quick decsion you started running down the road but unfortuanely tripped, soon after you tripped the bandits caught up to you. They tied you up taking you to there HQ were they feed you to there dogs.")
            }
            else if(numb == 2){
                alert("You quickly sprinted towards the house quickly hiding in order to avoid the bandits. While waiting you fell asleep.")
                alert("After you awoke from your sleep. You checked around to see any signs of the bandits but luckily they had left. So you start heading back to the military base to find ammo for your gun in the old armory. While there you found a few more things then just ammunition and that thing that you found was a robot dog. You somehow found a way to reactivate the robot dog, the dog reactivates and the first thing that the dog wants you to do is give it a name.")
                var username = prompt("What will you name your new friend")
                alert('You decided to name your new friend ' + username)
                alert("With your new companion you set off towards the town once again.")
            }
        }
        else if(numb == 2){
            alert("You decided to run away and by making so much noise when running the bandits started chasing after you causing you to run into the woods.(It was a good thing to becasue you had no bullets so you have to return to the old armory for some ammunition)")
            var numb = prompt("As you were getting chased by the group you stumbled across an old road and across the road was an old house that was in running distance. You have to decide quickly 1)Will you run down the road or 2)Hide in the house")
            if(numb == 1){
                alert("In a quick decsion you started running down the road but unfortuanely tripped, soon after you tripped the bandits caught up to you. They tied you up taking you to there HQ were they feed you to there dogs.")
            }
            else if(numb == 2){
                alert("You quickly sprinted towards the house quickly hiding in order to avoid the bandits. While waiting you fell asleep.")
                alert("After you awoke from your sleep. You checked around to see any signs of the bandits but luckily they had left. So you start heading back to the military base to find ammo for your gun in the old armory. While there you found a few more things then just ammunition and that thing that you found was a robot dog. You somehow found a way to reactivate the robot dog, the dog reactivates and the first thing that the dog wants you to do is give it a name.")
                var username = prompt("What will you name your new friend")
                alert('You decided to name your new friend ' + username)
                alert("With your new companion you set off towards the town once again.")
            }
        }
    }
    else if(numb == 4){
        alert("As you were reaching for a weapon you got hungry so instead you reached for a tuna sandwhich that was in a closed tub that read (Caution Hazard). As you were going to eat it a group of bandits approached the base.")
        var numb = prompt("What will you do 1)Will you fight or 2)Run away")
        if(numb == 1){
            alert("You decided to fight them but before you coward and decided to run away the bandits found you and started attacking you. But as you went to punch the bandit you accdentily hit him with the snadwhich causing him to fall to the floor dead. As more bandits kept attacking you kept hitting them with the sandwhich, and in a minute you had beat every single bandit. After the fight you were quite suprised but your shruged it off and started walking towards the direction of the twon were you were orginally going.")
        }
        else if(numb == 2){
            alert("You choose to run away but as you were running you were making too much noise causing the bandits to be alerted and starting to chase you into the woods")
            var numb = prompt("As you were running you came across an old road and across the road was an old house that was in running distance but you have decide quickly 1)Will you run down the road or 2)Will you hide in the house.")
            if(numb == 1){
                alert("While running down the road you tripped on one of the cracks of the road and fell causing the bandits to catch up. The bandits tied you up and took you to their dogs and feed you to them.")
            }
            else if(numb == 2){
                alert("You quickly ran towards the house and hid. But as you were hidning your stomach started growling which in response you atye the sandwhich causing you to die soon after eating the sandwhich.")
            }
        }
    }
};
document.body.appendChild(btn);