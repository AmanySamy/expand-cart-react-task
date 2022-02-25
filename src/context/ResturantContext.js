import React from 'react'


const ResturantContext = React.createContext({
    Resturants: [],
    UniqueTags: [],
    ActiveTage:'',
    ResturantsOfActiveTag: (tag) => { }
})
export default ResturantContext;


