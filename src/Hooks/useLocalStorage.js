import { useState } from 'react'

export default function useLocalStorage() {
  const stored = localStorage.getItem('userInfo')
  const initial = stored ? JSON.parse(stored) : []
  const [user] = useState(initial)

  const register = (value) => {
    const userArray = [...user, value]
    localStorage.setItem('userInfo', JSON.stringify(userArray))
  }
  const isExist = async (value) => {
    const isUser = await user.find((items) => items.email === value.email)
    return isUser
  }

  return { register, user, isExist }
}
