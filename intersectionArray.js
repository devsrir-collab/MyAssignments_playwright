const arr1 =['apple','Orange','banana','mango']
const arr2 =['apple','mango','berry','Orange']
const intersection = arr1.filter(item =>arr2.includes(item));
console.log(intersection)

//-------------------------------------------------
const arr3 =[1,2,3,4]
const arr4=[1,4,6,7]
const intersect = arr3.filter(value =>arr4.includes(value))
console.log(intersect)

const filterarr = []
const uniqarr = []
arr3.forEach(copy=> filterarr.push(copy))
arr4.forEach(copy=> filterarr.push(copy))
filterarr.forEach(ele => {
   if(!uniqarr.includes(ele))
    {
        uniqarr.push(ele);
    }    
})
console.log(uniqarr);

const arr5 = arr3.concat(arr4)

const new_arr =[]

arr5.forEach( eee => {
    if(!new_arr.includes(eee)){
        console.log(new_arr)
        new_arr.push(eee)
    }

})

console.log(new_arr)

//-------------------------------------------------

const sunny =['sun','cloud','hot','wet']
const winter =['rain','cloud','cool','wet']

const climate = sunny.filter(value=>winter.includes(value))
console.log(climate)

const season = sunny.concat(winter)
const newclimate =[]

season.forEach( ele => {
    if(!newclimate.includes(ele)){
        //console.log(newclimate)
        newclimate.push(ele)
    }

})

console.log(newclimate)

 //-------------------------------------------------
