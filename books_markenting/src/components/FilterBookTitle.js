const FilterBookTitle = ({onSearchTitle}) => {
    return(
        <div className='pa2 mb4 ml4'>
            <input
            name="filterTitle"
            className = 'pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='Enter book title'
            onChange={onSearchTitle}
            />
        </div>
    );
}

export default FilterBookTitle;
