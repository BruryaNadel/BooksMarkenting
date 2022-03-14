const FilterBookTopic = ({onSearchTopic}) => {
    return(
        <div className='pa2 mb4'>
            <input
            name="filteTopic"
            className = 'pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='Enter book topic'
            onChange={onSearchTopic}
            />
        </div>
    );
}

export default FilterBookTopic;