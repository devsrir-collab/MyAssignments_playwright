function gradeCalc(score){
switch(score){

    case 80:
        console.log("A grade and score is " +score)
        break
    case 70:
        console.log(`B grade with score ${score}`)
        break
    case 60:
        console.log(`C grade with score ${score}`)
        break
    default:
        console.log(`No grades`)
}
}

gradeCalc(70)

