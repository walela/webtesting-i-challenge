function succeed(item) {
  return { ...item }
}

function fail(item) {
  return { ...item }
}

const repair = item => {
  return { ...item, durability: 100 }
}

function get(item) {
  return { ...item }
}

module.exports = {
  succeed,
  fail,
  repair,
  get
}
