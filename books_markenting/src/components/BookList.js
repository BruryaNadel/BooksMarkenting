import Icon from "react-crud-icons";

const BookList = ({books, deleteBook, booksState}) => {

    const openBookDetails = () => {
        booksState.map((book, i) => {
            return(
                <div
                    className="flex flex-column ma3" 
                    key={books[i].id}>
                    <div>
                        {books[i].id}
                        {books[i].title}
                        {books[i].subjects}
                        {books[i].translators}
                        {books[i].bookshelves}
                        {books[i].languages}
                        {books[i].copyright}
                        {books[i].media_type}
                        {books[i].formats}
                        {books[i].download_count} 
                    </div>
                </div> 
            );
        })
    }

    return(
        <div className = 'tc bg-dark-green br3 pa3 ma2 dib bw2 shadow-5 h-nl mw6'>
            <p className="f8 black pa3 bg-green br3 shadow-3">THE BOOK LIST</p>
            <div>
            {
                books.map((book, i) => {
                    return(
                        <div
                        className="flex flex-row justify-between ma3" 
                        key={books[i].id}>
                            <div 
                            className="f4 link dim black underline pointer"
                            role="button"
                            onClick={openBookDetails}
                            >
                            {books[i].title}                          
                            </div>
                            <Icon
                            className="pointer f7" 
                            name = "delete"
                            tooltip = "Delete"
                            theme = "light"
                            size = "small"
                            onClick={deleteBook}
                            />
                        </div> 
                    );
                })
            }  
            </div>
        </div>
    );
}

export default BookList;
