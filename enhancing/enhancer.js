const succeed = item => {
  if (item.enhancement === 20) {
    return { ...item }
  } else {
    const { enhancement } = item
    const updatedEnhancement = enhancement + 1
    return { ...item, enhancement: updatedEnhancement }
  }
}

const fail = item => {
  const { enhancement, durability } = item

  if (enhancement < 15) {
    return { ...item, durability: durability - 5 }
  } else if (enhancement >= 15) {
    if (enhancement > 16) {
      return {
        ...item,
        durability: durability - 10,
        enhancement: enhancement - 1
      }
    } else {
      return { ...item, durability: durability - 10 }
    }
  }
}

const repair = item => {
  return { ...item, durability: 100 }
}

function get(item) {
  const { enhancement, name } = item

  if (enhancement === 0) {
    return { ...item }
  } else if (enhancement > 0) {
    const updatedName = `[+${enhancement}] ${name}`
    return { ...item, name: updatedName }
  }
}

module.exports = {
  succeed,
  fail,
  repair,
  get
}
