import React,{useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import {Typography,Row} from 'antd';
import MainImage from './Sections/MainImage';
import Grid from 'antd/lib/card/Grid';
import GridCard from './Sections/GridCard';
const{Title} = Typography;





function LandingPage() {
    const[Movies, setMovies] = useState([])


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=057347d7917e613bb337d5f538aac61b&language=en-US&page=1')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovies(response.result)
            })
    })
   
    
    return (
        <div style={{width: '100%', margin:0 }}>
            <MainImage />
            <div style={{background:'rgba(23,192,222,100)'
            }}>

            </div>

            <div>
                <div style= {{postion: 'absolute', maxWidth: '500px', bottom: '2rem', marginLeft: '2rem'}}>
                    <h1 style= {{colore:'black'}}>Som</h1>
                    <p style={{colore:'black', fontSize:'1rem'}}>Somi</p>

                </div>

            </div>
            <div>
                <hr />
                <Row gutter={[16,16]}>
                    {Movies && Movies.map((movie,index) => (
                        <React.Fragment key={index}>
                            <GridCard 
                                image={movie.poster_path && 'http://image.tmdb.org/t/pw500${movie.poster_path}'}
                                movieId={movie.id}
                            
                            />
                        </React.Fragment>
                    ))}

                </Row>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button onClick> Load More </button>
                </div>

            </div>

        </div>
        
    )
}

export default LandingPage
