
  const swordsman = {
    name: "мечник",
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  
  const sortOrder = ["name", "level"];
  
  function sortProp(obj, firstPart) {
    const secondPart = [];
  
    for (const prop in obj) {
      if (!firstPart.includes(prop)) {
          secondPart.push(prop);
      }
    }
    secondPart.sort();
  
    return [...firstPart, ...secondPart].map((key) => ({ key: key, value: obj[key] }));;
  }
  
  console.log(sortProp(swordsman, sortOrder));
  