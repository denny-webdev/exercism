//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (p) => {
  let mySet = new Set()
    for (let char of p) {
      mySet.add(char.toLowerCase()) 
    }

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
    for (let letter of alphabet) {
      if (!mySet.has(letter)) {
        return false
      }
        
    }
    return true

}

