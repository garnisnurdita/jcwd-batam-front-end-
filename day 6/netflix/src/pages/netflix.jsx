import { useEffect, useState } from "react"
import MovieDetail from "../components/movieDetail"
import "../css/netflix.css"
import axios from "axios"

export default function NetflixPage() {

    const [movies, setMovies] = useState([])

    const [movie,setMovie] = useState({
    })

    const [newData, setData] = useState(
        {
            id:0,
            title: "", 
            match : 1, 
            year: 2022 ,
            synopsis : "",
            category : "",
            img_url : "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
        })
    function changeMovie(newMovie) {
        setMovie(newMovie)
    }
    
     function showForm(edit) {

        if(edit) {
            setData({...movie})
            document.getElementsByName("title")[0].value = movie.title;
            document.getElementsByName("match")[0].value = movie.match;
            document.getElementsByName("year")[0].value = movie.year;
            document.getElementsByName("synopsis")[0].value = movie.synopsis;
            document.getElementsByName("category")[0].value = movie.category;
            document.getElementsByName("img_url")[0].value = movie.img_url;

        }
        else {
            setData({
                id:0,
                title: "", 
                match : "", 
                year: "" ,
                synopsis : "",
                category : "",
                img_url : "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
            })

            document.getElementsByName("title")[0].value = "";
            document.getElementsByName("match")[0].value = "";
            document.getElementsByName("year")[0].value = "";
            document.getElementsByName("synopsis")[0].value = "";
            document.getElementsByName("category")[0].value ="";
            document.getElementsByName("img_url")[0].value = "";

        }
        var x =  document.getElementById("background-add");
        var y = document.getElementsByClassName("movie-slider")
        if (x.style.display === "none" || x.style.display === "") {
            setTimeout(()=> {
                x.style.display = "flex";
          x.style.flexDirection = "row"
            y[0].style.display = "none"
        },500)
        } else {
          x.style.display = "none";
          y[0].style.display = "grid"    
        }
  
      }

      function addproductItem() {
        console.log(newData);
        if(movies.find((val)=> val.id === newData.id)) {
            return axios.patch("http://localhost:2000/netflix/" + newData.id, newData).then(()=>{
                fetchMovies()
                alert("movie has been movie has been updated ")
               })
        }

       return axios.post("http://localhost:2000/netflix", newData).then(()=>{
        fetchMovies()
        alert("new movie has been added ")
       })


      }

      function inputHandler(event) {
        const { value, name } = event.target;
        setData({
          ...newData,
          [name]: value,
        })
      }

      useEffect(() => {
        if(newData.img_url === "")
        setData({
            ...newData,
            ["img_url"]: "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png",
          })
      },[newData.img_url])

    
    const fetchMovies = async () => {
      await axios.get("http://localhost:2000/netflix").then((res)=>{
        setMovies([...res.data])
        setMovie({...res.data[0]})
      })
    }

    const deleteMovie = async () => {
        let answer =  window.confirm("are you sure you want to delete this movie?")
       if(answer) {
        await axios.delete("http://localhost:2000/netflix/"+ movie.id ).then(()=>{
            fetchMovies()
            alert("movie has been deleted ")
        })
     
         }
       } 


    useEffect(  () => {
        fetchMovies();

    },[])

    return (
        <>
      
      
        <div className="netflix-template" >    

        <div>
        <div className="navbar-netflix">
      <div className="navbar-logo"> NETFLIX</div>
        <div className="navbar-text">
            <div className="navbar-box1">UNLIMITED TV SHOWS & MOVIES</div>
            <div className="navbar-box2" onClick={()=> showForm()}>NEW</div>
            <div  className="navbar-box3" onClick={()=> showForm("edit")}>EDIT</div>
            <div  className="navbar-box3" onClick={()=> deleteMovie()}>DELETE</div>

        </div>
        </div>
         <div id="background-add" >
        <div className="product-add">
        <img src={newData.img_url} alt="product_img" style={{ width:"100%", height: "200px" }} />
        <input name="title" className="input-product" type={"text"} placeholder="Movie Title"  onChange={inputHandler}></input>       
        <input name="img_url" className="input-product" type={"text"} placeholder="Image URL"  onChange={inputHandler}></input>
        <input name="match" min={1} max={100} className="input-product" type={"number"} placeholder="Match"  onChange={inputHandler}></input>
        <input name="year" className="input-product" type={"number"} placeholder="Year"  onChange={inputHandler}></input>
        <textarea name="synopsis" className="input-product" type={"text"} placeholder="Movie Synopsis"  onChange={inputHandler}></textarea>
        <input name="category" className="input-product" type={"text"} placeholder="Category"  onChange={inputHandler}></input>
        <button className="button-add-product"   onClick={addproductItem}>Save </button>
         </div>

        </div>

        </div>

            <div className="movie-template" 
            style={{ backgroundImage: `url("${movie.img_url}")` }}>
          <MovieDetail movie={movie} />
          <div className="movie-img"></div>
          </div>
            <div className="movie-slider" >
                <div className="movie-slider-popular">POPULAR ON NETFLIX</div>
                <div className="movie-list">
              
              { movies.map((val,idx) => {
                return (
                    <div id={"movie_"+idx} key={idx} className="movie" onClick={()=> changeMovie(val)}>
                    <img  src={val.img_url} alt=""/>
                </div>
                )
              })
              
              }
             
                </div>
            </div>
        </div>

        </>

    )
}