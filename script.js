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
btn.innerHTML = "Start With Caution";
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
                alert("After a while you wake up. You look around the outside through the window to see if the bandits are anywhere near. After checking you step outside to continue your journey to the town that you were originally going to.")
                var numb = prompt("After walking for a while you come across a little village of friendly survibors. One of the survivors out in the farm offers you a room to rest in, but you are a little hesitant to accept the offer and are comteplating just declining the offer and continuing down the road. What will you do 1)Take the farmers offer or 2)continue down the road.")
                if(numb == 1){
                    alert("You happily accept the farmers offer to rest. The farmer takes you into the village and inside you see children running around and playing so you assume that nothing bad will happen. You are shown to the room that you were offered and told you that they would call you down for something to eat later.")
                    var numb = prompt("You set down what is left of your gear and lay down but your still suspicious of the village so you want to look around some more but you also want to trust the village. What will you do? 1)will you explore the village or 2)trust the villagers.")
                    if(numb == 1){
                        alert("The curious in you makes you jump up from the bed and decide to explore the village but you have to get out of the room without making noise so you crouch over to the door and open it quietly and sneak past the farmers and villagers inside the house and make it outside.")
                        var numb = prompt("You see too buildings that look worth exploring 1)the food storage house and 2)The city's cheif house")
                        if(numb == 1){
                            alert("You wanted to see just how much food this village is producing so you decided to go over to the storage house. When you walked inside you saw first hand how the village was getting its food, not only were they farming produce they were eating people. Insdie you saw people that have been chopped up and some that were behind makeshift metal bars. Horrified you ran out of the storage house, one of the villagers heard the commotion and ran over only to see you standing next to the doorway of the storage. Angered that you found out their secret the villager called out for help in order to kill you to keep the canabalism a secret.")
                            var numb = prompt("You left your gear in the room what will you do 1)Will you fight bare handed or 2)Make a run to the room to grab your gear.")
                            if(numb == 1){
                                alert('Instead of running to retrive your gear you started punching and dodging the villagers and there weapons. After an hour you had successfully killed every villager with your bare hands. You went into the room and retrieved your gear, but before you left you freed any survivors from the storage room. One of the survivors that you freed you managed to reconigzed, it was the famous bounty hunter McTavish Mcgee. You respond with your name ' + username)
                                alert("McTavish:'Thanks for saving me, I was on my way to Stadium city when I stopped to rest in the village but in the night I was dragged into this storage room. When I woke up I was in here and without my gear, My suspicions is that they might have sold my gear already.' After McTavish tells you what happens you tell him how you were also going to Stadium city. You ask McTavish if you would like to go together, McTavish agrees to accompany you and help you fight off anything while heading to the city. Soon after you and McTavish headout continuing your journey. After a few hours of walking you come across a merchant that exclusivly sells gear. You ask McTavish if he's going to buy new gear, McTavish agrees that he should by some new gear so he does exactly that but while talking to the merchant you notice something familiar. It's McTavish's gear and his revolver, McTavish hasn't noticed his gear is right infront of him.")
                                var numb = prompt("You procced to tell McTavish of his gear, the merchant takes notice of this and offers you the gear but at a very hefty price, you have the exact amount of money that the merchant is requesting but you also comtplate taking the gear instead of paying. What will you do 1)Pay for the gear or 2)Take back the gear.")
                                if(numb == 1){
                                    alert("To avoid any conflict you pay the merchant what he is asking for and retrieve McTavish's gear back, but before you set off again the merchant stops you and thanks you for paying and that for the outragous price he offers to upgrade your knife. You agree and the merchant makes your knife into a longsword with an unbreakable blade. You thank the merchant and move on, McTavish also thanks you for helping him get his gear back and tells you as bounty hunter we should protect the people and not cause trouble for them. After walking for a while you hear screaming.")
                                }
                            }
                        }
                    }
                }
                else if(numb == 2){
                    alert("You reject the villagers offer and instead choose to walk away, but the villagers are actually canniables and won't let their food gat away that easy so they ambush you and tie you up. After they capture you they drag you to the food storage house and cut you up in order to feed you to the village people. They leave you to bleed to death and in agonizing pain.")
                }
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
            alert("You decided to fight them but before you coward and decided to run away the bandits found you and started attacking you. But as you went to punch the bandit you accdentily hit him with the sandwhich causing him to fall to the floor dead. As more bandits kept attacking you kept hitting them with the sandwhich, and in a minute you had beat every single bandit. After the fight you were quite suprised but your shruged it off and started walking towards the direction of the town were you were orginally going.")
        }
        else if(numb == 2){
            alert("You choose to run away but as you were running you were making too much noise causing the bandits to be alerted and starting to chase you into the woods")
            var numb = prompt("As you were running you came across an old road and across the road was an old house that was in running distance but you have decide quickly 1)Will you run down the road or 2)Will you hide in the house.")
            if(numb == 1){
                alert("While running down the road you tripped on one of the cracks of the road and fell causing the bandits to catch up. The bandits tied you up and took you to their dogs and feed you to them.")
            }
            else if(numb == 2){
                alert("You quickly ran towards the house and hid. But as you were hidning your stomach started growling which in response you ate the sandwhich causing you to die soon after eating the sandwhich.")
            }
        }
    }
};
document.body.appendChild(btn);