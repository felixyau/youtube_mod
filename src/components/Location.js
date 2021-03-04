const Location = ({ setSearch, search,setItem }) => {
    const onHandleSubmit = (e) => {
        e.preventDefault();
        setItem({ isLoading:true });
        const youtube = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+ search +"&key=AIzaSyC5ESJtFjW5noagVC8i6T4j7iKmzCkPDi0"
        console.log(search)
        fetch(youtube)
        .then(res=>res.json())
        .then(repos => {
        setItem({ isLoading:false, repos })})
    }
    return ( 
        <form onSubmit={onHandleSubmit}>
            <label >Video Search <input value={search} onChange={(e) => setSearch(e.target.value)}  />
            <button type="submit">Search</button>
            </label>           
        </form>
     );
}
 
export default Location;