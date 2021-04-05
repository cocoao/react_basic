import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie';
import './App.css'

class App extends React.Component{  
  state = {
    isLoading : true,
    movies : [],
  }
  getMovies = async() => {
    const {
      data : {
        data : {movies},  
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    console.log(movies);

    this.setState({isLoading:false, movies:movies});
  }
  componentDidMount(){
    // setTimeout(function(){
    //   this.setState({isLoading:false});
    // },3000); this바인딩이 안됨

    // setTimeout(() => {
    //   this.setState({isLoading:false});
    // },3000);
    this.getMovies();
  }
  render(){
    // const isLoading = this.state.isLoading;
    const {isLoading, movies} = this.state; //여러개의 key값을 한번에 받을 수 있음

    return(
      (<div>
        <Header/>
        {isLoading ? 'Loading...' : movies.map((movie) => {
          console.log(movie);
          return <Movie
          key={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          />;
        })}
        <Footer/>
      </div>)
    );
  }
}
export default App;


// {isLoading ? 'Loading...' : 'All Data Loading Complete!'}
// 조건 ? 'true' : 'false'