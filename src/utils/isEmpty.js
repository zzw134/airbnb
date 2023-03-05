function isEmpty(obj) {
  if (obj === undefined || obj === null) return false
  return !!Object.keys(obj).length
}

export default isEmpty