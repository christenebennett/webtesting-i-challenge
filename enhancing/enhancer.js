module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  if (item.enhancement >= 20) {
    item.enhancement = 20;
    return { ...item };
  } else if (item.enhancement < 0) {
    item.enhancement = 0;
    return { ...item };
  } else {
    item.enhancement++;
    return { ...item };
  }

  // if (item.enhancement < 0) {
  //   // if enhancement is somehow less than 0, 
  //   // return item object with enhancement set to 0
  //   item.enhancement = 0;
  //   return { ...item };
  // } else if (item.enhancement < 20 && item.enhancement > 0) {
  //   item.enhancement++;
  //   return { ...item };
  // } else {
  //   item.enhancement = 20;
  //   return { ...item };
  // }
}

function fail(item) {
  if (item.enhancement >= 15) {
    item.durability = item.durability - 10;
    if (item.durability < 0) {
      item.durability = 0;
    }
    if (item.enhancement > 16) {
      item.enhancement = item.enhancement - 1
      return { ...item };
    } else {
      return { ...item };
    }
  } else {
    item.durability = item.durability - 5;
    if (item.durability < 0) {
      item.durability = 0;
      return { ...item };
    } else {
      return { ...item }
    }
  }
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if (item.enhancement === 0){
    return { ...item };
  } else if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`
    return { ...item };
  } else {
    item.enhancement = 0;
    return { ...item };
  }
}

