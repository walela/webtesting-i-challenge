const succeed = item => {
  if (item.enhancement === 20) {
    return item
  } else {
    const { enhancement } = item
    const updatedEnhancement = enhancement + 1
    return { ...item, enhancement: updatedEnhancement }
  }
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
