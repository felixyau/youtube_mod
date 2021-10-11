const Videos = ({repos,success,setVideoPlaying}) => {
    const onClick = (e) => {
        console.log("target:", e.currentTarget)
        let url = `https://www.youtube.com/embed/${e.currentTarget.id}`;
        setVideoPlaying(url);
    }
    console.log("success",success)
    if (!repos || !success) {
        return <div>youtube api fetch fail :(</div>
    } else if (success) {
        return (
        <div className="grid-container">
        {repos.items.slice(1,5).map((item)=>(
            <div key={item.id.videoId} id={item.id.videoId} className="videoList" style={{cursor:"pointer"}} onClickCapture={onClick}>
                <img className="thumbnail" src={item.snippet.thumbnails.default.url}/>
                <p className="title" style={{width:"150px",fontSize:"1em"}}>{item.snippet.title}</p>
            </div>)
        )}
        </div>);
    }  
    return null
}
  
export default Videos;