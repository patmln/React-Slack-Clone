export const uniqueArray = list => 
  list.filter((value, index, self) => 
    self.indexOf(value) === index)

export const findObjByKey = (list, key, input) => 
  list.filter(item => {
    const regex = new RegExp(`${input}`,'gi')
    return item[key].match(regex)
  })
