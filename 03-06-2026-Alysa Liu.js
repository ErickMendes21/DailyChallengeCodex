function calculateScore(elements) {
    let baseValue
    let S = 0
    let count = 0
    let auxH = 0
    let auxL = 100000
    let indexH
    let indexL
    let Tes = 0
    for (let i = 0; i < elements.length; i++) {
        let scores = [...elements[i][2]]
        baseValue = elements[i][1]
        for (let j = 0; j < scores.length; j++) {
            if (scores[j] > auxH) {
                auxH = scores[j]
            }
            if (scores[j] < auxL) {
                auxL = scores[j]
            }
        }
        indexH = scores.indexOf(auxH)
        indexL = scores.indexOf(auxL)
        if (indexH > indexL) {
            scores.splice(indexH, 1)
            scores.splice(indexL, 1)
        } else {
            scores.splice(indexL, 1)
            scores.splice(indexH, 1)
        }
        for (let j = 0; j < scores.length; j++) {
            S = S + scores[j]
            count++
        }
        S = S / count
        let elementScore = baseValue + (S * 0.1 * baseValue)
        Tes += elementScore
        S = 0
        count = 0
        auxH = 0
        auxL = 100000
    }
    return Tes.toFixed(1)
}

elements = [
  ["Triple Flip",            9.7,  [3, 2, 3, 3, 2, 4, 3, 2, 3]],
  ["Triple Lutz+Toe Combo", 12.5,  [4, 5, 4, 5, 5, 4, 4, 3, 4]],
  ["Triple Salchow",         7.0,  [2, 3, 2, 2, 3, 2, 2, 3, 2]],
  ["Triple Loop",            6.0,  [3, 3, 2, 4, 3, 3, 2, 3, 2]],
  ["Step Sequence",          3.3,  [4, 4, 4, 4, 3, 3, 4, 3, 4]]
]

let a = calculateScore(elements)
console.log(a)