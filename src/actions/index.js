
export const userAction = (userInfo) => {
  return {
    type: 'GET_USER',
    payload: userInfo
  }
}

export const addAction = (name, password) => {
    return{
      type: 'ADD_USER',
      payload:{name,password}
    }
}
