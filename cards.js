const greenSituations = ["You see an old lady crossing the street. A robber takes her purse! What do you use to stop him and take the purse for yourself?", "You need to cheat on a school test to pass the class. The teacher ends up catching you because someone snitched. How do you get away with it?", "You’re fighting the Ender Dragon barehanded. You get to download one hack to beat it. What do you choose?", "You’re in a foreign country and have crippling diarrhea. You need to relieve yourself somehow. How do you stop yourself from eternal embarrassment?", "Gordon Ramsay will give you 1 million dollars for a good dish. You burned the duck. He attacks you with it. What power do you use to defend yourself?", "God gives you one power to add to human evolution. What power would make the world much better than it is?", "Your dad needs help with something, but you don’t have a flashlight to hold. What power do you use to assist him instead?", "You’re running late for work and your boss is going to fire you because you already started a fire yesterday. How do you keep your job?", "A deranged zookeeper unleashed a cheetah that is now chasing you. Not wanting it to bite your butt, you use this power to escape.", "You’re in a school talent show and your singing skills aren’t cutting it. How do you rig the judging and win it all?", "You are a candidate in an undercover superhero team. You use this power to impress the recruiter.", "Your classmate is being a teacher’s pet. Since you hate her, you need to prank her and make her drop the class. What power allows you to do this?", "You are the star engineer of a large tech company and may get fired because of your lack of innovation. You go to a meeting and propose a new idea. The anxiety causes your superpower to manifest, directed right at the CEO.", "You’re falling off a cliff and there’s nothing you can do. In yesterday’s fever dream, you had a superpower. In a last ditch effort, you activate it. What power is it? Do you survive?", "Your upstairs neighbor is ripping it on the drums and you can’t get a break. He also sucks at music. What superpower do you use to finally shut them up? Did it work?", "April Fools is just around the corner. Your friend’s prank involves an FBI agent trying to arrest you. Out of revenge, you send your own agent with this power to fight the other guy.", "A zombie apocalypse is happening, and you’re surviving with your worst enemy. You see your best friend as a zombie approaching. Wanting revenge, what power do you use to avenge your friend and revenge your enemy?", "Your computer has randomly come to life and is mad that you never installed virus protection. Before it tells the other computers, you need to shut it down by doing this.", "A random spell causes every piece of sport equipment in the world to fly at you. Not wanting to become a sandwich, you pull out your remaining tennis racket and do what?", "A sudden bout of humanitarianism has manifested in you, so you decide to help the less fortunate. What power do you utilize in order to help the homeless have something to eat tonight?", "You notice a small elderly gentleman drop his wallet on the ground and you retrieve it for him, but you are unable to find him as he has blended in with a large crowd of people. How do you find him in order to take more of his stuff?", "While on a date with your crush, a song they love comes onto the radio. They start singing, and urge you to participate, but you don’t know the lyrics to the song. What power will help you in this situation in order to impress your crush?", "A black hole near Earth has been discovered. Knowing the world is doomed, what superpower do you unleash just for the sake of it, or perhaps to save the world (but probably not)?", "Usain Bolt riding a cheetah is chasing after you. What power do you unleash to survive this vicious attack?", "Samsung has waged war with Apple. Steve Jobs has come back to life as a cyborg and has the ability to take over the phone industry. What power allows him to do this?", "The world is now run by super-potatoes that duplicate every day. Needing to restore human power, what do you do?", "You notice small flashing lights in the sky that are getting closer. You end up being abducted. In order to give humanity the best first impression possible, you activate this superpower in an attempt to impress these extraterrestrials.", "After traveling back in time, you take back an egg that turns out to be a dinosaur. Criminals try to steal it, but it turns out your little buddy initiates this power out of panic (who knew dinosaurs had superpowers).", "You are the sidekick to a superhero that just broke his leg in a midnight snacking incident. Needing to save the day, you use a superpower that you’ve been secretly training to stop the refrigerator from coming to life and eating your wounded superior?", "Lebron James is trash talking you in the NBA Finals. Saving one last shred of dignity, what do you do?", "You’ve entered the Mario world as just a goomba. A big red plumber is hurling towards you. You eat a mushroom that lets you do this.", "Matt from Wii sports is boxing you and you have one health slice left. Rather than spamming, you do this to knock him out.", "College admissions are rolling around, and besides from doing one year of bowling, you don’t have much. What do you list to get into your dream school?", "Being hired by the Joker, you and your gang need to rob a bank. How do you get past security and get the money?", "A supervillain can absorb power. What power do you trick them into taking to beat them?", "Talent Show - Death Battle Tournament: Whoever's card would theoretically survive in a free-for-all battle, wins"]
const yellowSituations = ["Your homophobic friend comes out as a closeted gay. He starts sobbing uncontrollably in front of you and even expresses his feelings for you. How do you comfort him?", "You’re in a UFC fight against Khabib who has you in a chokehold. Then, you see your cornermen performing a ritual. Suddenly, his grip weakens and you see you’ve won. What did your team do?", "You fall for the good ol’ fashioned candy in the white van trick. Your kidnapper has you tied up in a dark room and is considering skipping the ransom. How do you escape?", "You’re late to work and get pulled over. Another speeding ticket gets you suspended. Also there’s LSD in the backseat, whoopsie. How do you get out of this ticket?", "Your lifeguard friend drowns at the Olympics, and you attend their funeral. During your memorial speech, your sadness causes _______ to occur. Can their parents still forgive you?", "During the Salem Witch Trials, you find the perfect opportunity to get rid of your arch nemesis. During a town meeting, you accuse Satan of possessing them with what?", "Play 2 - You’re in the video game Doom and are fighting against a demonic horde that can _______. After mooning them doesn’t work, you resort to _______.", "You’re in the Pokemon championship, but your last of 6 Pikachus is exhausted, but one has a hidden ability. After flipping off your opponent one last time, you use this move that can _______.", "They say Julius Caesar was stabbed to death by diplomats, but you know that isn’t the case. It was you who murdered him because he stole your watermelon. What power befell his death?", "You’re trying to convert your atheist friend to your religion. Summoning God, what miracle do you perform in order to convince them of your beliefs?", "After traveling back in time, you return to the present and find that Putin is now an adult film star. What in the world caused this huge change?", "You suspect your significant other of cheating on you. How do you find out? Are they?", "You’re about to swim in the Olympics but you have acquired a sudden and very large bulge. In order to not distract the gold-medal favorite, what do you desperately attempt?", "You’re charged with money laundering and are running from the CIA. Unfortunately you’re caught in Mexico because you accidentally did _______ out of panic.", "You’re a furry. That’s it. How do you escape the death squads of the United States secret police?", "Play 2 - The Geneva Conventions are becoming the Geneva Suggestions during World War III. The other side mercilessly uses _______. However, you are a vigilante and retaliate with _______.", "Play 2 - You designed a cure for all diseases, but when it enters human trials you discover that people who _______ now have a burning hatred for those who can _______.", "John Cena rings your doorbell, and you think you got ding-dong ditched. Something seems off. How do you discern the invisible man from his surroundings?", "Jesus descends down from the heavens and warns you of an apocalyptic event in 100 years involving Amber Heard’s granddaughter. What gives you the greatest chances of witnessing this historic event?", "God gives you one power to add to human evolution. What he doesn’t know is that you’re a satanic cult leader.. Wanting to see civilization end, what power do you give?", "You accidentally microwaved your goldfish and it is now Mutant Nemo. You two go on a quest to solve crime, but he must remain in his fishbowl. What is the most effective power?", "Climate change and war are rampant. God chooses you as his champion and declares you as the savior of the human race. How do you please him?", "You are a transgender man fighting a radical feminist. In this fight of the titans, how do you win the kerfuffle?", "Zuckerberg has been possessed by Meta and is now a sentient AI. Google hires you to stop him. You’re deathly afraid of lizards but pull through with _______.", "Play 2 - The Avengers are fighting Steven Hawking on steroids who can _______. They recruit you because of your ability to _______.", "Your political opponent accuses you of a scandal during a debate. Flustered, you _______ to convince everyone of your innocence.", "Every animal from the Ark is now chasing you after you slapped Noah like the bitch he is. You can’t escape, but you sure as hell can _______.", "During your wedding, instead of saying, “I do,” your excitement causes you to do this to your spouse. What happened? Do they end up leaving you?", "National Geographic claims they found a new species. In reality you were pretending to be a sheep that can _______.", "You stole the principal’s phone after he sentenced you to detention. Turns out, he’s a wanted assassin and now has a hit on you. What can you do to get off the list?", "You have to return to ancient China to save them from the Mongols. You challenge Genghis Kahn with a magical sword. How do you stop 10% of China from being related to him?", "When meeting the Pope, you remember it means “father” and accidentally say, “Hello Holy Daddy!” despite your Latin skills. Everyone stares at you with holy scorn. How do you recover their good graces?", "Play 2 - Karen walks through the door and demands a refund for _______. You employ _______ in the yelling match to prevent the manager from being summoned.", "Paul Revere’s horse died due to AIDS received from collateral damage from an oven explosion. How do you alert the founding fathers that the British are coming without getting hit by AIDS-inducing shrapnel?", "You are reading a book and suddenly its main character has been summoned from the pages. Unfortunately for you, you were reading “Communist Manifesto” and Mao Ze Dong now stands before you. How do you convince him to return to his world of parchment?", "Talent Show - Death Battle Tournament: Whoever's card would theoretically survive in a free-for-all battle, wins"]
const greenPowers = ["You have super speed but trip every 5 seconds.", "You can snap things out of existence but there’s a 10% chance you do it to yourself.", "You can turn invisible but any excretions are still visible and you’re 10x louder", "You can make anything come back to life but it turns rogue and imprints on you", "You’re a super genius but can’t communicate in any way.", "You have laser vision that shoots 1 inch out in front of you", "You can make a comeback in any argument 5 minutes afterwards.", "Telekinesis but Newton’s 3rd law still applies", "You can swap bodies with people but height and weight don’t change.", "You can charm anyone but get progressively uglier.", "Make people see things, but they see an embarrassing memory of yours as well", "When emotions run high, every chair in your vicinity explodes.", "You can fly but only downwards", "You can control sound but end up not hearing any of it", "You can manipulate atoms 10 at a time", "You can understand computers but end up consumed by the Zuckerverse", "You have super strength in one limb but the rest of your body is paralyzed", "You can grow anything instantly but all the food is nasty, rotten, and bitter", "You have echo and geo location but are colorblind and deaf.", "You can predict the future but no one believes you", "You know of every object that enters a black hole and its weight in decigrams.", "You can talk to animals but they are verbally abusive.", "You have a sentient AI that doesn’t know the difference between adding and subtracting", "You can manipulate nature. For each use, one body part turns into a rock.", "You can travel through the universe but still have human lungs.", "Farts are dangerously toxic.", "Control magnetic objects but they attract you as well.", "You have 100% aim minus 3% every time you’ve used school toilet paper", "You have super jumps over anything shorter than you.", "You have super reflexes but are immobilized for half a second after each use", "You can print legitimate money that is donated to senators", "You can destruct others at will but self destruct if they have your blood type", "You can clone yourself but each clone gets progressively dumber.", "You can grow taller as you get skinnier and shorter as you get fatter", "You can sing any national anthem in the wrong country", "Everytime you sneeze you need to go poop", "You are a human calculator one digit off every time", "Your video game currency becomes real life money with a 10^-Googol conversion rate", "You can predict the future but it gets less accurate the farther you see", "You can outpizza the hut. Practically an auto win", "You can talk to animals but they only lie to you", "You can slide for long distances", "Every watermelon in the world is at your disposal.", "You are invincible from the outside but more susceptible to internal illness", "You have super senses but when using one, the others are disabled completely", "You can double any object into the left handed version of itself", "You can grow hair in indescribable portions", "You can wall jump like Mario in infinite distance but one inch height", "You can charm anyone while getting progressively uglier", "Your luck increases everyday but one person dies everytime something good happens", "You can smell disease but one infected cell of it goes into you", "You can speak any language but only to the wrong person", "You can recycle anything but you get 10% leftover", "You have x-ray vision but could get cancer", "You can morph into any person but they happen to be having the worst day possible.", "You can shoot lasers but only out of your left big toe.", "You can run through doors 75% of the time", "You have super speed but normal reflexes", "You can add limbs to your body but you can’t remove them.", "Your body ages 2x slower, but your brain ages 2x faster"]
const yellowPowers = ["You can change anyone's sexuality at will but everyone will mistake your own sexuality.", "You have an encyclopedic knowledge of every sex position known to man", "You can turn on every electronic item in the room but they all scream, “That turned me on so much!”", "You have the ability to change into any race you want but your facial features remain the same", "If you hurt yourself, all the pain is diverted to the nearest racist", "You can project any word above someone’s head in bright neon letters, but it is always followed by the word “THICC”", "You can project holograms of anyone’s past, but the farther back the events happened, the less accurate the projection", "Staring at someone for 30 seconds straight causes them to die; if they see you staring the timer resets; if they see you staring at a multiple of 5, you die.", "You can pee in a straight line, and the stream doesn’t end until it hits something", "You have super speed but can never wear shoes; forever at friction’s mercy", "You have a Pokemon at your disposal that can perform any move conceivable, but it only responds to the command “I’m gay.”", "You can increase your intelligence, but for every IQ point you gain, you have to have sex with a historical dictator.", "You are fluent in French but only when you have a baguette shoved up your ass", "Instead of nutting due to arousal, you nut due to one random event every time you do it. Reset daily.", "You can read anyone’s thoughts, but only when you are physically inside of them.", "You can turn invisible, but only your pancreas remains visible", "You can speak fluent Japanese but only in a Mexican restaurant", "You can teleport but only to military camps while wearing a flag of the enemy country", "You can turn into a human nuke. One use", "Your buttcheeks are projected into forcefields.", "You can control water stemming from Chernobyl", "You can control fire stemming from cigarette smoke", "You can see ghosts, but you cannot hear them", "You can travel in time but you have stage 4 leukemia.", "You can raise the dead but they will forever remain a zombified corpse incapable of much more than simple speech", "You can grow any plant quickly but they moan when you water them and they reproduce similar to humans.", "You are an empath voodoo specialist. Any pain you inflict will be returned unto you.", "You can last in bed for hours but the time to finish is randomized. All results are either tiringly long or embarrassingly short", "You own a supercomputer robot that recharges by attaching itself to a random hole in your body.", "For every cowboy hat you wear, your debating skills increase by 10%. Stackable.", "You can speak to animals but they are all extremely [INSERT]phobic", "You can fly but will always be mistaken with enemy airplanes", "You can shoot lasers that randomly ranges from a laser pointer to nuclear ordinance", "You can seduce anyone but only for other people. You are the perpetual wingman.", "You can cure any disease if you persist with it throughout the course of a year; you will never die from the disease, only suffer.", "You have supersonic screams but only when you are moaning.", "You have super strength but it has a high potential to break your bones when activated", "You have eyes in the back of your head, but you can’t tell your barber about it", "Anyone in your vicinity who touches a fruit becomes pregnant with one.", "You can resist death every 3rd time", "You have the largest penis in the world but the smallest foreskin", "You have X-ray vision but give cancer to anything you use it on", "You can stop time, but a psychopath spawns with you every time until you resume the clock.", "You can run really fast but only when your dad is chasing you with a belt", "If you call someone’s forehead a landing strip, the Air Force will call an attack on their forehead.", "You can easily beat someone in a debate but only if your dick is larger. Tough shit ladies.", "You have extremely good luck at the expense of your own parents and friends", "You can generate and use money that comes from a cancer charity.", "You can predict natural disasters but its the wrong one in the wrong location", "You can make someone excrete anything from their body at anytime by doing finger guns at them", "You can shit out pennies", "All people with biblical names are willing to follow your every command", "You can save a life by pressing a button that takes 5 lives. Aristotle wrote this one.", "You can seduce anyone by inducing a hernia or slipped disk.", "You can steal anyone’s superpower, but if your blood types don’t match, you implode", "You can change one molecule in any medicine and give it to someone.", "You can make chemical reactions happen spontaneously to get promoted at your nuclear power plant, but you don’t control the amount of substance.", "You can make human animal hybrids by giving away one of your chromosomes.", "You can bypass any firewall by changing its password to your search history", "You can do anything. If you somehow lose this round, just leave."]
module.exports = {greenSituations, yellowSituations, greenPowers, yellowPowers}
