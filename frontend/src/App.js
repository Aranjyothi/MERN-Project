import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState({});
  const [isloding, setIsLoding] = useState(true);
  const currentUserInfo = async () => {
    try {
      const ifo = await userServive.info();

      const { username, email } = info.data;

      setUser({ username, email });
    } catch (error) {
      let message = error.response.data.error;
      if (message.includes("expire")) {
        localStorage.removeItem("token");
      }
    }finally{
      setIsLoding(false)
    }
  };
  useEffect(()=>{
    let token = localStorage.getItem('token')

    if(initialRender){
      if (token){
        currentUserInfo(token)
        initialRender =false
      }else{
        setIsLoding(false)
      }
    }
  },[])
  let routes;
  let loggedIn = user.username
  

  if (!isloding){
    if(loggedIn){
      routes = (
        <Routes>
          <Route path="/" element={<Book/>}>
            <Route path="/profile" element={<Profile username={user.username}email={user.email}/>}></Route>
          </Route>
          <Route path="*" element={<Navigate to='/'/>}></Route>
        </Routes>
      )
    } else {
      routes=(
        <Routes>
          <Route path="/"element={<Book/>}> </Route>
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/register" element={<Register setUser={setUser}/>}/>
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
      )
    }
  }

  return( 
  <div className="App">
    <Navbar user={user.username}setUser={setUser}/>
    {/* {routes} */}
  </div>
  )
}

export default App;
