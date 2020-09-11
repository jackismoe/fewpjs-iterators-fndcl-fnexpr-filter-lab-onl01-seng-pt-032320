const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

const findMatching = (array, match) => {
  let driver = array.filter(possible => possible.toLowerCase() === match.toLowerCase())
  return driver
}

const fuzzyMatch = (array, match) => {
  let driver = array.filter(possible => possible.toLowerCase().indexOf(match.toLowerCase()) === 0 ) 
  return driver
}

const matchName = (array, match) => {
  let driver = array.filter(possible => possible.name === match)
  return driver
}