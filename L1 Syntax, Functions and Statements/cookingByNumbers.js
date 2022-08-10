function cookingByNumbers(n, oper1, oper2, oper3, oper4, oper5){
   n = +n;
   let commandList = [oper1, oper2, oper3, oper4, oper5];
   let chop = x => x /2;
   let dice = x => Math.sqrt(x);
   let spice = x => ++x;
   let bake = x => x * 3;
   let fillet = x => x - x * 0.2;

   for (let i = 0; i < commandList.length; i++) {
        switch (commandList[i]) {
            case 'chop': n = chop(n);
            console.log(n);
            break;
            case 'dice': n = dice(n);
            console.log(n);
                 break;
            case 'spice': n = spice(n);
            console.log(n);
                 break;
            case 'bake': n = bake(n);
            console.log(n);
            break;
            case 'fillet': n = fillet(n);
            console.log(n);
            break;
        }
   }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');