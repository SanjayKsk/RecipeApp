import axios from 'axios'


export const getRecipesList = async ( tags = null, size  ) => {
    
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
            from: '0',
            size: size  || '20',
            tags
        },
        headers: {
            'X-RapidAPI-Key': 'ce798d76d4msh43050fe88d5a74bp1ee837jsn747f180f59d2',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    return await axios.request(options)
}