module.exports = {
  succeed,
  fail,
  repair,
  get,
};


function succeed(item) {
  if(item.enhancement < 20) {
    item.enhancement++;
    return { ...item };
  } else {
    item.enhancement = 20;
    return { ...item };
    
  }
}

function fail(item) {
  if (item.enhancement >= 15) {
    console.log(item)
    item.durability = item.durability - 10;
    console.log(item)
    if (item.enhancement > 16) {
      item.enhancement = item.enhancement - 1
      return { ...item };
    } else {
      return { ...item };
    }
  } else {
    item.durability = item.durability - 5;
    return { ...item };
  }
}

function repair(item) {
  item.durability = 100;
  return { ...item };
  // return item.durability;
  
}

function get(item) {
  return { ...item };
}

