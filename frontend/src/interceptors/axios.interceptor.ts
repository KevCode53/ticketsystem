import { getValidatorErrorMessage } from "@/utilities/validation.utility";
import axios from "axios";

export const PublicPrivateInterceptor = () => {

  axios.interceptors.request.use((request) => {
    if (request.headers?.Authorization) {
      return request
    }
    // const token = getBasicAuthorization()
    // const newHeaders = {
    //   Authorization: token,
    //   'Content-Type': 'application/json'
    // }
    // request.headers = newHeaders
    return request
  })

  axios.interceptors.response.use(
    (response) => {
      window.location.href === '/reset-success'
      return response
    },
    (error) => {
      const redirect = () => {
        window.location.href = '/'
      }

      if (error.code) {
        console.log("Error", getValidatorErrorMessage(error.code))
      }
      return Promise.reject(error)
    }
  )
}