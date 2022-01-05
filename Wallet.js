class Wallet {
 constructor(money) {
  let _money = money;

  this.getWalletValue = () => _money;
  this.checkIfCanPlay = value => _money >= value ? true : false;
  this.changeWallet = (value, type ='+') => {
   if(typeof value === 'number' && !isNaN(value)) {
    if (type === '+') {
     return _money += value;
    } else if (type === '-') {
     return _money -= value;
    } else {
     throw new Error('nieprawidlowy typ');
    }
   } else {
     console.log(typeof value);
     throw new Error ('nieprawidlowy typ');
   }
  }
 }
}
