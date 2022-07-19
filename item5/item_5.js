let radiusCircle = '5 см',
    radiusCircleNum = parseInt(radiusCircle),
    PlkrugaResult = Math.PI * Math.pow(radiusCircleNum, 2)

let Plkruga = PlkrugaResult.toFixed(2) + 'см^2';

console.log(Plkruga);