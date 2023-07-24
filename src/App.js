import "./App.css";
import { useRef } from "react";

function App() {
  const showRef = useRef();
  const userRef = useRef();
  const postsRef = useRef();
  const albumsRef = useRef();
  const handleClickUsers = async () => {
    showRef.current.innerHTML = "";
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    const lists = data
      .map((item) => `<li>${JSON.stringify(item)}</li>`)
      .join(" ");
    console.log(lists);
    showRef.current.innerHTML = lists;
    // console.log(showRef.current.innerHTML);
    userRef.current.classList.add("Clicked");
    postsRef.current.classList.remove("Clicked");
    albumsRef.current.classList.remove("Clicked");
  };

  const handleClickPosts = async () => {
    showRef.current.innerHTML = "";
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    const lists = data
      .map((item) => `<li>${JSON.stringify(item)}</li>`)
      .join(" ");
    console.log(lists);
    showRef.current.innerHTML = lists;
    // console.log(showRef.current.innerHTML);
    userRef.current.classList.remove("Clicked");
    postsRef.current.classList.add("Clicked");
    albumsRef.current.classList.remove("Clicked");
  };

  const handleClickAlbums = async () => {
    showRef.current.innerHTML = "";
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    console.log(data);
    const lists = data
      .map((item) => `<li>${JSON.stringify(item)}</li>`)
      .join(" ");
    console.log(lists);
    showRef.current.innerHTML = lists;
    // console.log(showRef.current.innerHTML);
    userRef.current.classList.remove("Clicked");
    postsRef.current.classList.remove("Clicked");
    albumsRef.current.classList.add("Clicked");
  };

  return (
    <div className="App">
      <div className="BtnShow">
        <button ref={userRef} onClick={handleClickUsers} className="Users">
          User Informations
        </button>
        <button ref={postsRef} onClick={handleClickPosts} className="Posts">
          Post Informations
        </button>
        <button ref={albumsRef} onClick={handleClickAlbums} className="Albums">
          Album Informations
        </button>
      </div>
      <div ref={showRef} className="ShowResult"></div>
    </div>
  );
}

export default App;
