import { endpoints } from 'api/endpoints'
import { ApiErrors } from 'constants/errors';
import { ApiResponse } from 'interfaces/api.interfaces';
import { Cocktail } from 'interfaces/cocktails.interfaces';
import { axios } from 'modules/axios'

const getRandom = async () => {
  const { data } = await axios.request<{ drinks: Cocktail[] }>({
    method: 'GET',
    url: endpoints.cocktails.getRandom(),
  })

  return data.drinks[0]
}

export const cocktailsApi = {
  getRandom,
}
