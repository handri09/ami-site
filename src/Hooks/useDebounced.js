import React, { useState, useEffect } from 'react'

export default function useDebounced(value, timeout) {
  // return a value that doesn't change while the user is typing
  let [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => { 
    let timeoutId = setTimeout(() => { 
      console.log('setting the value')
      setDebouncedValue(value)
    }, timeout)

    return () => { 
      console.log('clearing the timeout')
      clearTimeout(timeoutId)
    }
  }, [value, timeout])

  return debouncedValue
}