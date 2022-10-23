// Code your solutions in this f

/*QUestions: 
1. Do I need to set a parameter in the function write cards in order to receive arguments.
// Why wont it let me return cards
2. Why is write card function call faded out
3. If I am creating the argument how will the tester file input their own argument
4. Why doesn't events define if I use double quotes
*/





const cards = ["jake", "calvin", "walker"];
const events = `birthday`;
const newCards = [];
//cardtype is the array of cards
function writeCards(cards, events) {
    for (let i = 0; i < cards.length; i++) {

        newCards.push(`Thank you, ${cards[i]}, for the wonderful ${events} gift!`);

    }
    return newCards;

}
writeCards(newCards, events);


let i=0;
function countDown(i) {
    while ( i >= 0) {
       
        console.log(i);
        i--;
    }
}
countDown(n);