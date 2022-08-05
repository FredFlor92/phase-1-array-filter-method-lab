// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Annette', 'Sarah', 'bobby'];

function findMatching(collection, stringToMatch){
    
    const matchList = collection.filter (function (user){
        return user.toLowerCase() === stringToMatch.toLowerCase();
    });
    return matchList;
}
function fuzzyMatch(array, string){
    const matchReturns = array.filter( function (user){
        return user.startsWith(string);
    });
    return matchReturns;
}
function matchName(array, string){
    const matchReturn = array.filter( function (user){
        return user.name === string;
    })
    return matchReturn;
}