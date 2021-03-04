const Videos = ({repos,success,setVideoPlaying}) => {
    const onClick = (e) => {
        setVideoPlaying(e.target.url);
    }
    console.log("success",success)
    if (!repos || !success) {
        return <div>youtube banned me :(</div>
    } else if (success) {
        return (
        repos.items.slice(0,4).map((item)=>(
            <div url={item.snippet.thumbnails.default.url} key={item.id} className="videoList" style={{cursor:"pointer", height:"20px", width:"50px"}} onClick={onClick}>
                <img src={item.snippet.thumbnails.default.url}/>
                <p style={{width:"50px"}}>{item.snippet.title}</p>
            </div>)
        ));
    }  
    return null
}
  
export default Videos;