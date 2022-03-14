import { Component } from "react";
import './App.css';
import FilterBookTitle from "./components/FilterBookTitle";
import FilterBookTopic from "./components/FilterBookTopic";
import BookList from "./components/BookList";

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      filterTitle: '',
      filterTopic: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/books')
      .then(response => response.json())
      .then(books => this.setState({ books: books }))
  }

  onSearchTitle = (event) => {
    this.setState({ filterTitle: event.target.value })
  }

  onSearchTopic = (event) => {
    this.setState({ filterTopic: event.target.value })
  }

  render() {

    const { books, filterTitle, filterTopic } = this.state;

    const filterBooks = books.filter((item, i) => {
      return (
        item.title.toLowerCase().indexOf(filterTitle.toLowerCase()) >= 0
        && (item.subjects.findIndex((j) => j.toLowerCase().includes(filterTopic.toLowerCase()))!== -1)
      )
    })

    const deleteBook = (id, i) => {
      const removeItem = books.filter((books) => {
        return books.id !== id;
      });
      this.setState({books: removeItem});
    } 

    return !books.length ?
      <h1>loading</h1> : (
        <div className='App'>
          <header className="f1 b dark-green pa3">THE BOOK MARKENTING</header>
          <div className='flex flex-row'>
            <FilterBookTitle className='fl w-50' onSearchTitle={this.onSearchTitle} />
            <FilterBookTopic className='fl w-50' onSearchTopic={this.onSearchTopic} />
          </div>
          <BookList books={filterBooks} booksState={books} deleteBook={deleteBook}/>
        </div>
      );
  }
}

export default App;