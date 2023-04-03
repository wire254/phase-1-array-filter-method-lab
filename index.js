function findMatching(arr, name) {
    return arr.filter(driver => {
      return driver.toUpperCase().includes(name.toUpperCase());
    });
  };

function fuzzyMatch(arr2, name2) {
    const driverMatch =[];
    for (const driver of arr2) {
      if(driver.slice(0,2) === name2) {
        driverMatch.push(driver)
      }
    } return driverMatch
}

function matchName(arr3, name3){
  const nameMatch = [];
  for (const driver of arr3){
    if (driver.name === name3)
      nameMatch.push(driver)
  } return nameMatch
}