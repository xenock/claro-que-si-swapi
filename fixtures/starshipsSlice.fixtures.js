export const initialState = {
  rawStarships: [],
  filteredStarships: [],
  ascendingOrder: true,
  orderFieldName: '',
  fields: [],
  selectedStarship: null
}

export const fields = [
  'name',
  'cost_in_credits',
  'length',
  'crew',
  'passengers',
  'consumables',
  'hyperdrive_rating',
  'MGLT',
  'starship_class'
]

export const initialLoad = {
  starships: {
    rawStarships: [
      {
        name: 'Death Star',
        model: 'DS-1 Orbital Battle Station',
        manufacturer:
          'Imperial Department of Military Research, Sienar Fleet Systems',
        cost_in_credits: '1000000000000',
        length: '120000',
        max_atmosphering_speed: 'n/a',
        crew: '342,953',
        passengers: '843,342',
        cargo_capacity: '1000000000000',
        consumables: '3 years',
        hyperdrive_rating: '4.0',
        MGLT: '10',
        starship_class: 'Deep Space Mobile Battlestation',
        pilots: [],
        films: ['http://swapi.dev/api/films/1/'],
        created: '2014-12-10T16:36:50.509000Z',
        edited: '2014-12-20T21:26:24.783000Z',
        url: 'http://swapi.dev/api/starships/9/'
      },
      {
        name: 'Millennium Falcon',
        model: 'YT-1300 light freighter',
        manufacturer: 'Corellian Engineering Corporation',
        cost_in_credits: '100000',
        length: '34.37',
        max_atmosphering_speed: '1050',
        crew: '4',
        passengers: '6',
        cargo_capacity: '100000',
        consumables: '2 months',
        hyperdrive_rating: '0.5',
        MGLT: '75',
        starship_class: 'Light freighter',
        pilots: [
          'http://swapi.dev/api/people/13/',
          'http://swapi.dev/api/people/14/',
          'http://swapi.dev/api/people/25/',
          'http://swapi.dev/api/people/31/'
        ],
        films: [
          'http://swapi.dev/api/films/1/',
          'http://swapi.dev/api/films/2/',
          'http://swapi.dev/api/films/3/'
        ],
        created: '2014-12-10T16:59:45.094000Z',
        edited: '2014-12-20T21:23:49.880000Z',
        url: 'http://swapi.dev/api/starships/10/'
      }
    ],
    filteredStarships: [
      {
        name: 'Death Star',
        model: 'DS-1 Orbital Battle Station',
        manufacturer:
          'Imperial Department of Military Research, Sienar Fleet Systems',
        cost_in_credits: '1000000000000',
        length: '120000',
        max_atmosphering_speed: 'n/a',
        crew: '342,953',
        passengers: '843,342',
        cargo_capacity: '1000000000000',
        consumables: '3 years',
        hyperdrive_rating: '4.0',
        MGLT: '10',
        starship_class: 'Deep Space Mobile Battlestation',
        pilots: [],
        films: ['http://swapi.dev/api/films/1/'],
        created: '2014-12-10T16:36:50.509000Z',
        edited: '2014-12-20T21:26:24.783000Z',
        url: 'http://swapi.dev/api/starships/9/'
      },
      {
        name: 'Millennium Falcon',
        model: 'YT-1300 light freighter',
        manufacturer: 'Corellian Engineering Corporation',
        cost_in_credits: '100000',
        length: '34.37',
        max_atmosphering_speed: '1050',
        crew: '4',
        passengers: '6',
        cargo_capacity: '100000',
        consumables: '2 months',
        hyperdrive_rating: '0.5',
        MGLT: '75',
        starship_class: 'Light freighter',
        pilots: [
          'http://swapi.dev/api/people/13/',
          'http://swapi.dev/api/people/14/',
          'http://swapi.dev/api/people/25/',
          'http://swapi.dev/api/people/31/'
        ],
        films: [
          'http://swapi.dev/api/films/1/',
          'http://swapi.dev/api/films/2/',
          'http://swapi.dev/api/films/3/'
        ],
        created: '2014-12-10T16:59:45.094000Z',
        edited: '2014-12-20T21:23:49.880000Z',
        url: 'http://swapi.dev/api/starships/10/'
      }
    ],
    ascendingOrder: true,
    orderFieldName: 'name',
    fields: [],
    selectedStarship: null
  }
}
