jsonData ={                     //for in loop
    one: [11, 12, 13, 14, 15],
    two: [21, 22, 23],
    three: [31, 32]
 }
 
 for(var key in jsonData) {
    for (var key1 in jsonData[key]) {
        console.log(jsonData[key])
    }
 }

 json ={                         //for of loop is not sutable in object
    one: [1,2,3,4,5],
    two: [6,7,8],
    three: [10,20]
 }
 
 for(var key of json) {
    for (var key1 of json[key]) {
    
        console.log(json[key])
    }
    }
 
                                         //for loop regular 
    var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}
                                          //for each 

numbers.forEach((element)=>console.log(element*2))
