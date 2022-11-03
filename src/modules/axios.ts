import Axios from 'axios'

import { apiUrl } from 'config/app'

export const axios = Axios.create({
  baseURL: apiUrl,
})
