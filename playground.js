const title = "The cat in the hat."
const titleArray = title.split(" ")
console.log(titleArray);
const titleCasedArray = titleArray.map((element)=>{
    return element[0].toUpperCase() + element.slice(1)
})
console.log(titleCasedArray);
const stringTitleCased = titleCasedArray.join(" ")
console.log(stringTitleCased);