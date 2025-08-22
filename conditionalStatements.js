function launchBrowser(browser){ 

    if (browser == 'chrome'){
        console.log("Chrome is launched")
    }
   else if(browser=='edge')
{
 console.log("Edge is launched")
}
else{
        console.log(`launch browser ${browser}`)
}
}

launchBrowser("Safari")

// switch case

function testType(test){
switch(test){
    case "Regression":
        console.log("Regression testing")
    case "Smoke":
        console.log("Smoke testing")
    case "Sanity":
        console.log("Sanity testing")
    default :
      console.log("adhoc testing")
}
}

testType("Regression")

//with break statement

function testingType(test){
switch(test){
    case "Regression":
        console.log("Regression testing")
        break
    case "Smoke":
        console.log("Smoke testing")
        break
    case "Sanity":
        console.log("Sanity testing")
        break
    default :
      console.log("adhoc testing")
}
}

testingType("adhoc")