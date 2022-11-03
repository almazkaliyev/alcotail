import { api } from 'api';
import { Spinner } from 'components/shared/Spinner';
import { Cocktail } from 'interfaces/cocktails.interfaces';
import { Component, createResource } from 'solid-js';

const RandomCocktailPage: Component = () => {
  const [cocktail, { refetch }] = createResource<Cocktail>(api.cocktails.getRandom)

  return (
    <div class="container mx-auto mt-20">
      <div class="flex justify-center">
        <div class="flex justify-center items-center gap-3">
          <h1 class="font-sans text-2xl text-emerald-600">Random Cocktail</h1>
          <button class="text-center p-1" type="button" onClick={refetch}>
            <svg class="inline w-5 h-5 fill-emerald-600 hover:fill-emerald-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13h2q0 2.925 2.038 4.962Q9.075 20 12 20t4.962-2.038Q19 15.925 19 13t-2.038-4.963Q14.925 6 12 6h-.15l1.55 1.55L12 9 8 5l4-4 1.4 1.45L11.85 4H12q1.875 0 3.513.713 1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22Z"/>
            </svg>
          </button>
        </div>
      </div>
  
      <div class="flex justify-center mt-10">
        {cocktail.loading ? (
            <Spinner />
          ) : (
            <div class="w-80 rounded overflow-hidden shadow-lg">
              <img class="w-full h-80" src={cocktail().strDrinkThumb} alt={cocktail().strDrink} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{cocktail().strDrink}</div>
                <p class="text-gray-700 text-base">
                  {cocktail().strInstructions}
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                {cocktail().strTags
                  ?.toLowerCase()
                  .split(',')
                  .map((tag) => (
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{tag}
                    </span>
                  ))}
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default RandomCocktailPage
