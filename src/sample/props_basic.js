import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function Movie({title, ranking, picture}){
  // console.log(typeof ranking);
  return(
    <div>
      <h3>My favorit Movie is {title}</h3>
      <p>Ranking : {ranking}</p>
      <img src={picture} alt={title}/>
    </div>
  );
}
// const arr = ['a', 'b', 'c', 'd'];
// arr.map(function(elm){
//   console.log(elm);
//   return 0;
// });
// arr.map((elm) => {
//   console.log(elm);
//   return 0;
// })

const myMovies = [
  {id : 1,
   title : "해리포터",
   ranking : 5,
   image : "https://imgsnacker.hankyung.com/wp-content/uploads/2020/12/%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B0-%EB%B6%88%EC%82%AC%EC%A1%B0%EA%B8%B0%EC%82%AC%EB%8B%A8-%ED%8F%AC%EC%8A%A4%ED%84%B0-600x857.jpg"},
  {id : 2,
   title : "아이언맨",
   ranking : 4,
   image : "https://gmedia.playstation.com/is/image/SIEPDC/marvels-iron-man-vr-dde-art-01-ps4-en-hk-27aug19?$1600px$"},
  {id : 3,
   title : "스파이더맨",
   ranking : 4.5,
   image : "https://static.hubzum.zumst.com/hubzum/2019/05/09/13/c26f10bc297f4336a62a5a7ff95affa4.jpg"},
  {id : 4,
   title : "어벤저스",
   ranking : 5,
   image : "https://lh3.googleusercontent.com/proxy/PRwCspUvPH2ZCLbiQXJLQNTB_km9RbDzZi0LXuiqP2aj5XK5Tb_fD8QBI9Eb7TKZoslVzuHan1EIMkJ0DwzKTH7tUWLH2feHE50LZKByrP1wHxvxnW7wtih68ZOr94VHlfk4GJv5HQZVQwQcPa92i2X2usameHdO0tX3vpUdTDzK4Vgh3nc1RDb1gk-sgtqfuEFuF36fp-3m-LfWykUhWE3Vg37P2l-zEbikFvc3bq_XB-rZqfiqTQRDk0jnlf57WjvSY6JuqlzGGe52CmVXDVEUdPkpd2fCazonHcI4fMc-erQ-dg"},
];

function App() {
  return (
    <div className="App">
      <h2>My movie</h2>
      {myMovies.map((movies) => (
        <Movie title={movies.title} ranking={movies.ranking} picture={movies.image} key={movies.id}/>
      ))}
    </div>
  );
}

Movie.propTypes = {
  title:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  ranking:PropTypes.number.isRequired,
};
export default App;