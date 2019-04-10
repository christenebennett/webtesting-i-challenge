module.exports = {
  succeed,
  fail,
  repair,
  get,
};

const expected = {
  name: "Good Shield",
  durability: 100,
  displayName: "[+3] Good Shield"
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
  
}

function get(item) {
  return { ...item };
}

