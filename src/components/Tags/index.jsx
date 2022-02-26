import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ResturantContext from '../../context/ResturantContext'
import { Carousel } from 'primereact/carousel';
import ResturantCard from '../ResturantCard';

const TagSection = styled.section`
    padding: 50px 0px;
    
`


const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all .3s ease-in-out;
    position: relative;
    height: 250px;
    z-index: 9;
    &:hover{
        /* background: #333;
        background-blend-mode:overlay;
        border-radius: 10px; */
        h3{
            color: #000;
        }
    }
    h3{
        position: absolute;
        background: #ffffff69;
        width: 100%;
        height: 100%;
        color: #000;
        margin: 0;
        font-size: 20px;
        font-family: 'Cinzel', serif;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 28px;
        box-shadow: inset 0 0 5px rgb(255 255 255 / 50%), 0 0 5px rgb(0 0 0 / 50%);
        font-weight: bold;
    &:hover{
        background: transparent;
    }
    }
    img{
        width: 100%;
        height: 100%;
    }
`
const Spliter = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #333 ;
    
    h3{
        font-size: 24px;
        @media (max-width: 768px) {
            font-size: 20px;
        }
        @media (max-width: 400px) {
            font-size: 18px;
        }
        span{
            color:orange;
            font-weight: bold;
        }
    }
    button{
        border: 0;
        background: none;
        font-weight: bold;
        font-size: 20px;
        @media (max-width: 768px) {
        font-size: 18px;
    }
    }
`
const TagTitle = styled.h3`
    border-width: 1px 0;
    border-style: solid;
    padding: 4px 15px 0;
    font-size: 32px;
    display: inline-block;
    margin: 30px auto;
`
export default function Tags() {
    const resturants = useContext(ResturantContext).Resturants
    const tags = useContext(ResturantContext).UniqueTags

    const [ActiveTag, setActiveTag] = useState('')
    const [ActiveTagResturants, setActiveTagResturants] = useState([])

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '900x',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];


    function handleClick(tag) {
        setActiveTag(tag.name)

        let filteredRes = resturants.filter(res => res.tags.some(tagg => tagg.name === tag.name))
        console.log(filteredRes)
        setActiveTagResturants(filteredRes)

    }

    let itemTemplate = (tag) => (
        <div style={{ padding: '10px' }}>
            <Item onClick={() => handleClick(tag)}>
                <img src={tag.image} alt="" />
                <h3>{tag.name}</h3>
            </Item>
        </div>
    )

    return (
        <TagSection>
            <div className='container'>
                <TagTitle>Tags</TagTitle>
                <Carousel value={tags} itemTemplate={itemTemplate} numVisible={4} numScroll={1} responsiveOptions={responsiveOptions} circular={true} />
                <Spliter>
                    {ActiveTag
                        ? <h3> Top Resturants of <span>{ActiveTag}</span> Tag</h3>
                        : <h3>All Resturants</h3>
                    }
                    <button onClick={() => { setActiveTagResturants(resturants); setActiveTag("") }}>See all</button>
                </Spliter>
                {/* <Resturants> */}
                <div className="row">
                    {ActiveTag
                        ? ActiveTagResturants.map((res, index) => (
                            <div className="col-12 col-md-6" key={`Resturant-${index}`} >
                                <ResturantCard Rest={res} small={false} />
                            </div>
                        ))
                        : resturants.map((res, index) => (
                            <div className="col-12 col-md-6" key={`Resturant-${index}`}>
                                <ResturantCard Rest={res} small={false} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </TagSection>
    )
}
