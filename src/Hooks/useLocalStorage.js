import { useState } from 'react'

export default function useLocalStorage(initialValues) {
  const stored = localStorage.getItem('userInfo')
  const initial = stored ? JSON.parse(stored) : initialValues
  const [user] = useState(initial)

  const register = (value) => {
    const userArray = [...user, value]
    localStorage.setItem('userInfo', JSON.stringify(userArray))
  }

  return { register, user }
}
