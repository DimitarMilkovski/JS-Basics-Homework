
let totalAmount = 60000;

function moneyWithdraw (withdrawAmount){
    if (withdrawAmount<=totalAmount){
    let newCondition = totalAmount - withdrawAmount;
    console.log('Please take your money');
    console.log(`You have ${newCondition}mkd left on your account.`)
    totalAmount = newCondition //After withdrawal the total amount is equal to the new condition.
    }

    else if (withdrawAmount>totalAmount){
        console.log('Not enough money')
    }
    else{
        console.log('Incorrect entry! Please try again')
    }
}
//loop for multiple withdrawing attempts
// na Google Chrome pravi problem ponekogash ne saka da prikazuva nishto vo konzolata
// na Mozzilla raboti super.
// sliki vo folderot
while (totalAmount!==0) {
    let withdrawAmount = parseInt(prompt('Please enter the amount you want to withdraw:'))    
    moneyWithdraw(withdrawAmount);
}
