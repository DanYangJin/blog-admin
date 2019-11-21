/**
 * @fun 获取storage中存储的值
 * @param {*} storage 这边判断是session还是local
 * @returns 转换后的json或者没有时的undefined
 */
function getStorage (storage) {
  return function (key) {
    let value
    try {
      return (value = storage.getItem(key)) && typeof value !== 'undefined'
        ? JSON.parse(value)
        : undefined
    } catch (err) {}
    return undefined
  }
}

/**
 * 设置storage
 * @param {*} storage 这边判断是session还是local
 */
function setStorage (storage) {
  return function (key, value) {
    return storage.setItem(key, JSON.stringify(value))
  }
}

/**
 * 移除某一个key的storage
 * @param {*} storage 这边判断是session还是local
 */
function removeStorage (storage) {
  return function (key) {
    return storage.removeItem(key)
  }
}

/**
 * 清楚所有storge
 * @param {*} storage 这边判断是session还是local
 */
function clearStorage (storage) {
  return function () {
    return storage.clear()
  }
}

// localStorage的存贮获取
export const local = {
  getItem: getStorage(localStorage),
  setItem: setStorage(localStorage),
  removeItem: removeStorage(localStorage),
  clear: clearStorage(localStorage)
}

// sessionStorage的存贮获取
export const session = {
  getItem: getStorage(sessionStorage),
  setItem: setStorage(sessionStorage),
  removeItem: removeStorage(sessionStorage),
  clear: clearStorage(localStorage)
}
