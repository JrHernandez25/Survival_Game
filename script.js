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
                alert("After a while you wake up. You look around the outside through the window to see if the bandits are anywhere near. After checking you step outside to continue your journey to Stadium City that you were originally going to.")
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
                                    alert("To avoid any conflict you pay the merchant what he is asking for and retrieve McTavish's gear back, but before you set off again the merchant stops you and thanks you for paying and that for the outragous price he offers to upgrade your knife. You agree and the merchant makes your knife into a longsword with an unbreakable blade. You thank the merchant and move on, McTavish also thanks you for helping him get his gear back and tells you as bounty hunter we should protect the people and not cause trouble for them. After walking for a while you are closley approaching Stadium city, but all of a sudden you hear screaming from the direction of the city so you and McTavish run as fast as you both can and see the horror. The city was getting attacked by a massive number of raiders, you and McTavish hurry to go assist the city guards with defending the people McTavish says that both of you should split up and help in different areas but your not sure splitting up is a good aidea becasue right now there is only a handful of people that could help if you or McTavish get into some trouble.")
                                    var numb = prompt("1)Will you agree to split up or 2)Accompany McTavish where ever he goes")
                                    if(numb == 1){
                                        alert("You make a quick decision and agree with spliting up so you part ways with McTavish and head to different areas of the city. You go to help over at the west and north areas of the city, While fighting off a group of the raiders with your newly aquired longsword you hear the intercom of the stadium go off. Its one of the leaders of the raiders and they say that they captured a big fish and that big fish was McTavish, McTavish was bested in a fight becasue the raiders played dirty and used humen sheilds, and to show that they were not kidding they brought out McTavish. To break any hope of the people in the stadium the leader of the raiders stabbed and pushed McTavish of the balcony where the intercom was. You finish up with the fight and run over to where McTavish landed, McTavish:'Who knew that my reason for being a bounty hunter would be the same reason I would be bested' Before McTavish closes his eyes he gives you his hat and his revolver and tells you to continue helping people, soon after McTavish enters his enternall sleeep, angered by your friends death you run up the stairs to the intercom booth to confront the leader of the raiders. He laughs at how angry you are from your friends death, even more enraged you kill the first raider that was with the leader the proceed to kill everyone in there but the leader. You charge them but that was a mistake clouded by anger the leader was able to best yoy and the leader of the raiders took one last look at you before taking McTavish's revolver and shooting you in the head. With almsost no one to defend the city the city falls along with its people. The last remaining survivors flee the city and turn to surviving out in the wild. IN the end both you and your friend were left behind in the stadium to become forgotten rotting corpses.")
                                    }
                                    else if(numb == 2){
                                        alert("You tell McTavish that you will follow him, McTavish accepts you decision so both of you go over to the east area of the city and when you get there you see the leader of the raiders beheading the people of Stadium city. McTavish come up with a plan for him to get their attention and for you to quietly kill the raiders with the leader. You agree and get into position McTavish gets the attention of the leader and he asks the leader why he would hurt innocent people , the man responds by saying that the world no longer has rules and that the world is now his playground and that people and towns where his toys to destroy. You are able to quietly kill the raiders with him and so you grab the leaders attention aswell. The leader is suprised that he was tricked so like the coward that he is he tries to run away but McTavish shoots him in the back of the knees. He begs for his life but McTavish grabs his head and smashes it into the concrete of the Stadium. To scare the raiders away McTavish drags the body of the raiders leader up to the balcony of the intercom booth. McTavish makes the announcement of how they captured the raiders leader and when the raiders attention turns to the balcony you use your sword to behead the body of the leader and let it fall to the ground. Many of the raider coward in fear and quickly rand away but there were some brave ones but those were quickly killed by the remaining guards of Stadium city. You and McTavish managed to save the city and its people, the people hail you and McTavish as heros. In the end you and McTavish stay in Stadium city to help rebuild and defend Stadium city.")
                                    }
                                }
                                else if(numb == 2){
                                    alert("You refuse to pay the merchant and instead stab the man in the neck and take back the gear, both you and McTavish run away. When you both are far away enough from the mans body you hand the gear over to McTavish. While you hand the gear over you notice that McTavish is disturbed so you ask. He angrily tells you that you are the problem of why he is angry. You sarcasticly tell McTavish that instead of beging angry he should thank you. But that only make McTavish more angry, McTavish tells you that what you did was murder and that he was an innocent man, but McTavish sees that you have no signs of regret.McTavish then tells you that because he is a bounty hunter its his job to take murderers of the street even if that means killing you. McTavish draws his revolver and gets ready to shoot you, but you won't go down that easily so you respond back by drawing your knife but your to slow and McTavish quickly shoots you in the leg. Then in the stomach after McTavish turns to you and says that you should suffer for what you did and leaves you to bleed to death on the cold road.")
                                }
                            }
                            else if(numb == 2){
                                alert("You make a run for the room to gather your gear and fight the villagers but instead while thinking about what to do a villager sneaks up behind you and stabs you in the neck, you fall to the floor knowing that you will die.")
                            }
                        }
                        else if(numb == 2){
                            alert("You make a decision to check the cheifs home so you sneak over to the opened window of the home and when you manage to get through the window infront of you is standing a horrifying creature you try to crawl out of the window but the creature grabs you from the leg. In your lasts moments you come to a conclusion that this cheif never had a cheif and instead kept monsters in this house were they would feed this creature and keep it as some sort of pet.")
                        }
                    }
                    else if(numb == 2){
                        alert("You brush of the idea of snooping around and instead fall asleep only to wake up chained up and behind bars, a fellow captive tells you that there is no escape and that you are destined to become the villagers next meal.")
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
                alert('With your new companion you set off towards Stadium city once again. After a while of walking you come across a village but' + username + 'warns you that one of the feature that he was built with can detect any ill will an any area so he advises you to sneak past the farmer that is outside the walls in order to avoid confrontation. You are so in shook that your robot dog can talk you did not catch the dogs warning but luckily ' + username + 'saw that you were not listening so the dog explains the sitiuation to you again, you agree to sneak past the farmer and then continue on towards stadium city')
                alert("You manage to sneak past the farmer and continue walking towards stadium city, while walking there you come across a merchant that persuades you into looking at what he has in stock and while browsing you spot your old gear. You know that it is your gear becasue the laser gun he is selling has the engravings that you put on it. You ask the man how much he is selling the laser gun for, the man says that the item is rare to come across so he will sell it to you for $5,000. You do have more than enough money to pay for it but in your mind you think that is it really stealing if you just kill the merchant and take it becasue it was originally yours.")
                var numb = prompt("What will you do 1)Pay the amount or 2)Kill the merchant and take your gear back.")
                if(numb == 1){
                    alert('You decide to pay the amount that the merchant is asking for and after retrieving your laser gun back you start your journey once again to stadium city, but while walking ' + username + ' tells you that he can modify your m4 carbine to shoot laser and to not need ammo, amazed once again you agree so you hand over both weapons and wait for your robot dog to finish modifying your gun.')
                    var numb = prompt("You and your robot dog were closley approaching stadium city when you heard screaming coming from the direction of the city, so you and your dog run to Stadium city only to find that it was currntly under attack so your rush inside the walls and see the massacre. Your robotic dog tells you that he finished modifying your gun so the dog hands it back to you. You don't know if you can cover a lot of area if you and your robotic friend don't split up to cover more area. What will you do 1)Will you tell your dog to split up or 2)Remain together.")
                    if(numb == 1){
                        alert('You tell ' + username + ' that you should split up to cover more ground, the dog complies and goes to the east direction of the city and you go to the wesr section. There you encounter the leader of the raiders killing innocent people. Enraged you charge at the group with your newly improved m4 carbine but each one of the raiders pulls a gun and shoot you down before you could even fire a shot. Your robot dog notices that your life signs have stoped so they rush over only to see you laying on the cold floor lifeless. Your robot friend then kills every bandit that is in the city because they are responsible for their friends death. ' + username + ' is able to save the remaining survivors and instead of staying in the city leaves and starts heading back to the military base where ' + username + ' first met you.')
                    }
                    else if(numb == 2){
                        alert('You tell ' + username + ' to stay close by you and to help any people they find, you both head towards the west section of the city where you come across the leader of the raiders killing innocent people. You tell ' + username + ' to ready his guns that he has built in becasue you were deciding to go in loud and kill everyone he follows your order and soon both of you jump around twon differnt corner overwhelming the group and gunning them all down including the leader. After killing the leader you and ' + username + ' go around killing any raiders that might have survived. After a while you managed to kill all the raiders and also managed to save many people of Stadium city, you and your dog decide to settle down and join the guard in order to protect the city from danger.')
                    }  
                }
                else if(numb == 2){
                    alert("You decide that you are going to steal back your gear so you pull out your m4 carbine and prepare to shoot but the merchant is faster and uses the laser gun to shoot you first in the stomach. The merchant then robs you of everything and takes your robot dog to before leaving you to bleed out on the could road.")
                }
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
                alert('With your new companion you set off towards stadium city once again. After a while of walking you come across a village but' + username + 'warns you that one of the feature that he was built with can detect any ill will an any area so he advises you to sneak past the farmer that is outside the walls in order to avoid confrontation. You are so in shook that your robot dog can talk you did not catch the dogs warning but luckily ' + username + 'saw that you were not listening so the dog explains the sitiuation to you again, you agree to sneak past the farmer and then continue on towards stadium city')
                alert("You manage to sneak past the farmer and continue walking towards stadium city, while walking there you come across a merchant that persuades you into looking at what he has in stock and while browsing you spot your old gear. You know that it is your gear becasue the laser gun he is selling has the engravings that you put on it. You ask the man how much he is selling the laser gun for, the man says that the item is rare to come across so he will sell it to you for $5,000. You do have more than enough money to pay for it but in your mind you think that is it really stealing if you just kill the merchant and take it becasue it was originally yours.")
                var numb = prompt("What will you do 1)Pay the amount or 2)Kill the merchant and take your gear back.")
                if(numb == 1){
                    alert('You decide to pay the amount that the merchant is asking for and after retrieving your laser gun back you start your journey once again to stadium city, but while walking ' + username + ' tells you that he can modify your m4 carbine to shoot laser and to not need ammo, amazed once again you agree so you hand over both weapons and wait for your robot dog to finish modifying your gun.')
                    var numb = prompt("You and your robot dog were closley approaching stadium city when you heard screaming coming from the direction of the city, so you and your dog run to Stadium city only to find that it was currntly under attack so your rush inside the walls and see the massacre. Your robotic dog tells you that he finished modifying your gun so the dog hands it back to you. You don't know if you can cover a lot of area if you and your robotic friend don't split up to cover more area. What will you do 1)Will you tell your dog to split up or 2)Remain together.")
                    if(numb == 1){
                        alert('You tell ' + username + ' that you should split up to cover more ground, the dog complies and goes to the east direction of the city and you go to the wesr section. There you encounter the leader of the raiders killing innocent people. Enraged you charge at the group with your newly improved m4 carbine but each one of the raiders pulls a gun and shoot you down before you could even fire a shot. Your robot dog notices that your life signs have stoped so they rush over only to see you laying on the cold floor lifeless. Your robot friend then kills every bandit that is in the city because they are responsible for their friends death. ' + username + ' is able to save the remaining survivors and instead of staying in the city leaves and starts heading back to the military base where ' + username + ' first met you.')
                    } 
                    else if(numb == 2){
                        alert('You tell ' + username + ' to stay close by you and to help any people they find, you both head towards the west section of the city where you come across the leader of the raiders killing innocent people. You tell ' + username + ' to ready his guns that he has built in becasue you were deciding to go in loud and kill everyone he follows your order and soon both of you jump around twon differnt corner overwhelming the group and gunning them all down including the leader. After killing the leader you and ' + username + ' go around killing any raiders that might have survived. After a while you managed to kill all the raiders and also managed to save many people of Stadium city, you and your dog decide to settle down and join the guard in order to protect the city from danger.')
                    }
                }
                else if(numb == 2){
                    alert("You decide that you are going to steal back your gear so you pull out your m4 carbine and prepare to shoot but the merchant is faster and uses the laser gun to shoot you first in the stomach. The merchant then robs you of everything and takes your robot dog to before leaving you to bleed out on the could road.")
                }
            }
        }
    }
    else if(numb == 4){
        alert("As you were reaching for a weapon you got hungry so instead you reached for a tuna sandwhich that was in a closed tub that read (Caution Hazard). As you were going to eat it a group of bandits approached the base.")
        var numb = prompt("What will you do 1)Will you fight or 2)Run away")
        if(numb == 1){
            alert("You decided to fight them but before you coward and decided to run away the bandits found you and started attacking you. But as you went to punch the bandit you accdentily hit him with the sandwhich causing him to fall to the floor dead. As more bandits kept attacking you kept hitting them with the sandwhich, and in a minute you had beat every single bandit. After the fight you were quite suprised but your shruged it off and started walking towards the direction of Stadium city were you were orginally going.(Narrator:'I'm not going to let you use a tuna sandwhich that is too powerful so becasue I have the power to kill you I'm going to do that, The End'")
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