function compareJson(json1, json2) {
   

    try {
        
        if (typeof json1 !== 'object' || typeof json2 !== 'object') {
            throw new TypeError('Both arguments must be objects');
        }

        
        if (Object.keys(json1).length !== Object.keys(json2).length) {
            return false;
        }

       
        for (let key in json1) {
            if (!(key in json2) || json1[key] !== json2[key]) {
                return false;
            }
        }

        return true;
    } catch (error) {    
        console.error(error);
        return false;
    }
}

var obj1 = {name:"person1",age:5};
var obj2={age:5,name:"person1"};
var  result = compareJson(obj1, obj2);
if(result == true?console.log("both json are same"):console.log("both json are not same"));
