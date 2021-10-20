// import jwtDecode from 'jwt-decode'
// import moment from 'moment'

export const getToken = () => localStorage.getItem("token");

export const setToken = (token) => localStorage.setItem("token", token);

export const removeToken = () => localStorage.removeItem("token");

// export const getIsTokenExpired = ()=> {
//   const token = getToken()

//   if (token !== null) {
//     const decodedData = jwtDecode<{ exp: number }>(token, { header: true })
//     const expDateTime = moment(decodedData.exp * 1000)
//     const isExpiredInTwoMinutes = expDateTime.diff(moment(), 'minutes') < 2
//     return isExpiredInTwoMinutes
//   } else {
//     return true
//   }
// }
