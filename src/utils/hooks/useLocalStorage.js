import {useEffect, useState} from 'react'

const PREFIX = 'slack-clone-'

export default(key, initValue) => {
  const prefixedKey = PREFIX+key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)

    return typeof initValue === 'function' 
      ? initValue() : initValue
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
