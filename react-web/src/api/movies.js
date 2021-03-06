// import React, { Component } from 'react';
// import './App.css';
// import MoviesList from './components/MovieList';
// import MovieForm from './components/MovieForm';
// import * as moviesAPI from './api/movies';
// class App extends Component {
//   state = { movies: null };
//   componentDidMount() {
//     moviesAPI
//       .all()
//       .then(movies => {
//         this.setState({ movies });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   handleMovieSubmission = movie => {
//     this.setState(movies => ({ movies: [movie].concat(movies) }));
//     moviesAPI.save(movie);
//   };
//   render() {
//     const { movies } = this.state;
//     return (
//       <div className="App">
//         <MovieForm onSubmit={this.handleMovieSubmission} />
//         <hr />
//         {movies ? <MoviesList movies={movies} /> : 'Loading...'}
//       </div>
//     );
//   }
// }
// export default App;

export function all() {
  return fetch('/movies')
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
}
export function save(movie) {
  return fetch('/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
    });
}
