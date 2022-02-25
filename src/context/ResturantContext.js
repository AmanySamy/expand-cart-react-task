import React from 'react'


const ResturantContext = React.createContext({
    Resturants: [],
    UniqueTags: [],
    ActiveTage:'',
    ResturantsOfActiveTag: (tag) => { }
})
export default ResturantContext;
// export default props => {
//     return (
//         <ResturantContext.Provider value={{ Resturants: props.Resturants }}>
//             {props.children}
//         </ResturantContext.Provider>
//     )
// }

