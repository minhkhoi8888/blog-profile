import Header from './Components/Header/Header';
import './App.scss';
import { useState } from "react";
import Edit from './Components/Edit/Edit';
import Footer from './Components/Footer/Footer';
import ListPost from "./Components/ListPost/ListPost";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpen, setOpen] = useState(false);
 
  return (
    <>
      {isEdit ? (
        <Edit setEdit={setEdit} />
      ) : (
        <>
          <Header setEdit={setEdit} />
          <ListPost />
          <Footer setOpen={setOpen} isOpen={isOpen} />
        </>
      )}
    </>
  );
}

export default App;
