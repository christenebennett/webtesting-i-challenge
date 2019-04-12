module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  if (item.enhancement >= 20) {
    item.enhancement = 20;
  } else if (item.enhancement < 0) {
    item.enhancement = 0;
  } else {
    item.enhancement++;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement >= 15) {
    item.durability -= 10;
    if (item.durability < 0) {
      item.durability = 0;
    }
    if (item.enhancement > 16) {
      item.enhancement -= 1
      return { ...item };
    } else {
      return { ...item };
    }
  } else {
    item.durability -= 5;
    if (item.durability < 0) {
      item.durability = 0;
    } 
    return { ...item };
  }
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  if (item.enhancement === 0){
  } else if (item.enhancement > 0) {
    item.name = `[+${item.enhancement}] ${item.name}`
  } else {
    item.enhancement = 0;
  }
  return { ...item };
}

