//built with hopes and dreams. I snew i should have done this swooner.
        //constants
        const deck = [
            1,2,3,4,5,6,7,8,9,10,10,10,10, //suite 1
            1,2,3,4,5,6,7,8,9,10,10,10,10, //suite 2
            1,2,3,4,5,6,7,8,9,10,10,10,10, //suite 3
            1,2,3,4,5,6,7,8,9,10,10,10,10, //suite 4
        ]
        const namedeck = [
        "Ace of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts",
        "Ace of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds",
        "Ace of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Jack of Clubs", "Queen of Clubs", "King of Clubs",
        "Ace of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "Jack of Spades", "Queen of Spades", "King of Spades"
        ];

        //functions
        
        //delay
        function delay(ms){ 
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        //psuedorandom generator
        function drawcard(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        //playerturn mechanics
        function player() {
            while(true){
            let deal = prompt('Hit? (Y/N)');
                if(deal==='Y' && playertotal<21){
                    let randcard = drawcard(0,51);
                    console.log('You drew', namedeck[randcard], 'giving you', deck[randcard]);
                    playertotal+=deck[randcard];
                    console.log('Your total is:', playertotal);

                        if(playertotal>21){
                            console.log('Bust!');
                            console.log("You lose!");
                            return;
                            break;
                        }
                        
                        else if(playertotal==21){
                            console.log('Blackjack!');
                            console.log('You win!');
                            return;
                            break;
                        }

            }
                else if(deal==='N' && playertotal<21){
                    playerturn = false;
                    console.log("Dealer's Turn...");
                    return;
                    break;
                }   
            }
        }

        //bot mechanics
        async function bot(){
            console.log("mrmollusc's hand is", namedeck[card_a2],'and',namedeck[card_b2], 'totalling to', start2);
            let randcard = drawcard(0,51);
            for(i = 0; i <21; i++){
                await delay(1000);
                if(playertotal>=21){
                    return;
                    break;
                }
                if(aitotal>21){
                    console.log('Bust!');
                    console.log('mrmollusc loses!');
                    console.log('You win!');
                    return;
                    break;
                    
                }
                else if(aitotal == 21){
                    console.log('Blackjack!');
                    console.log('mrmollusc wins!');
                    console.log('You lose!');
                    return;
                    break;
                    
                }
                else if(aitotal>playertotal){
                    console.log('mrmollusc stands.')
                    console.log('mrmollusc wins!');
                    console.log('You lose!');
                    return;
                    break;
                    
                }
                else{
                    console.log('mrmollusc drew', namedeck[randcard], 'giving them', deck[randcard]);
                    aitotal+=deck[randcard];
                    console.log("mrmollusc's total is:", aitotal);
                }
            }
                    
        }
                    
                



        //game-loop
        async function game() { //await allows synchronous execution of things
            await player(); //the game function AWAITs for the player's turn to be over!
            await delay(1000);
            if(playerturn==false){
            await bot(); //bot is halted from running until player function BREAKS/RETURNS;
            }
            card_a = drawcard(0,51);
            card_b = drawcard(0,51);
            card_a2 = drawcard(0,51);
            card_b2 = drawcard(0,51);

            start = deck[card_a]+deck[card_b];
            start2 = deck[card_a2]+deck[card_b2];

            playertotal = deck[card_a]+deck[card_b];
            aitotal = deck[card_a2]+deck[card_b2];
            let randcard = drawcard(0,51);
            console.log('Your starting hand is', namedeck[card_a],'and',namedeck[card_b], 'totalling to', start);
            console.log('Your total is:', playertotal);
            game();
            
            

        }

        //variables
        let playerturn = true;
        let card_a = drawcard(0,51);
        let card_b = drawcard(0,51);
        let card_a2 = drawcard(0,51);
        let card_b2 = drawcard(0,51);

        let start = deck[card_a]+deck[card_b];
        let start2 = deck[card_a2]+deck[card_b2];

        let playertotal = deck[card_a]+deck[card_b];
        let aitotal = deck[card_a2]+deck[card_b2];

        //init
        console.log('Welcome to CMDline Blackjack v 1.1!');
        console.log('For now, a few things have not been implemented: Ace values, Splitting, 2 Player Mode, Math.random being really bad. ps will never fix :/');
        console.log('A Changelog will appear below, ticking off the things implemented :)');
        console.log('1.1: Added the 2 initial cards');
        console.log('1.2: Infinitely replayable');
        console.log('-mrmollusc');
        console.log('Click to start');
        console.log('Your starting hand is', namedeck[card_a],'and',namedeck[card_b], 'totalling to', start);

        //activate
game();
