import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./components/store/themeSlice";
import plus from './assets/plus.svg'
import Modal from "./components/Modal";


function App() {
  const selector = useSelector(state => state.themes.mode)
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.setAttribute('data-theme', selector)
  }, [selector])


  const handleClick = () => {
    dispatch(changeTheme())
  }


  return (
    <div className="wrapper">
        <Header handleClick={handleClick}/>
        <Main/>
        <div className="img">
          <img src={plus} alt="" />
        </div>
        <Modal/>
    </div>
  );
}

export default App;
