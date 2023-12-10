
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { FiltersProps } from '@/types'
import { fetchCars } from '@/utils'

interface MyFiltersProps {
  searchParams: FiltersProps
}

export default async function Home({ searchParams }: MyFiltersProps ) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 
                      || !allCars

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width'
        id='discover'>
          <div className='home-text-container'>
            <h1 className='text-4xl font-extrabold'>
              Car Catalogue
            </h1>
            <p> Explore the cars yyou might like</p>
          </div>

          <div className="home-filters">
            <SearchBar />

            <div className='home-filter-container'>
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
              <div className="home-cars-wrapper">
                {allCars.map((car, index) => (
                  <CarCard key={index} car={car} />
                ))}
              </div>
              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10 ) > allCars.length}
              />
            </section>
          ) : (
            <div className='home-error-container'>
              <span className='text-xl text-black font-bold'>Ooops, not result</span>
              <p>{ allCars?.message }</p>
            </div>
          )}
      </div>
    </main>
  )
}
