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
  return { ...item };
}

