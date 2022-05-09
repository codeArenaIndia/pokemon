export const CONFIG = {
    LIMIT: 20,
    INIT_URL: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    BASE_URL: 'https://pokeapi.co/api/v2/pokemon/?offset=0',
    SEARCH_TEXT : ['searchtext'],
    FILTER_NAME: ['name'],
    FILTER_HEIGHT: ['height'],
    FILTER_WEIGHT: ['weight']
}

export const FILTER_OPTIONS= [
    {value:"name-asc", text:'Name Asc'},
    {value:"name-desc", text:'Name Desc'},
    {value:"height-asc", text:'Height Asc'},
    {value:"height-desc", text:'Height Desc'},
    {value:"weight-asc", text:'Weight Asc'},
    {value:"weight-desc",  text:'Weight Desc'},
]


export const CARD_COUNT= [
    {value:"10", text:'10'},
    {value:"20", text:'20'},
    {value:"50", text:'50'}
]
