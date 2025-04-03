function MaxPurchase(budget, keyboardPrice, mousePrice) {
    let max = -1;
    
    for (let keyboard of keyboardPrice) {
        for (let mouse of mousePrice) {
            let totalCost = keyboard + mouse;
            if (totalCost <= budget && totalCost > max) {
                max = totalCost;
            }
        }
    }
    
    return max;
}

console.log(MaxPurchase(60, [40, 50, 60], [5, 8, 12]));
console.log(MaxPurchase(10, [3, 1], [5, 2, 8]));
