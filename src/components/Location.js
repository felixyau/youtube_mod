import { useState } from "react";
;
const Location = ({ setItem,setVideoPlaying }) => {
    const [search, setSearch] = useState("");
    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (!search) {
            alert("You didn't type anything for us to search");
            return
        }
        setItem({ isLoading:true });
        console.log("search",search)
        const youtube = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q="+ search +"&key=AIzaSyC5ESJtFjW5noagVC8i6T4j7iKmzCkPDi0"
        fetch(youtube)
        .then(res=>res.json())
        .then(repos => {
        setItem({ isLoading:false, repos, success:true })
        setVideoPlaying(`https://www.youtube.com/embed/${repos.items[0].id.videoId}`)})
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