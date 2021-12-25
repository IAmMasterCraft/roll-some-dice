export default function ({ $axios, redirect }) {
    $axios.onError(error => error.response)
  }