import React,{useState,useEffect} from 'react'
import axios from 'axios';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import './books.css';
import { FaCaretSquareLeft,FaCaretSquareRight } from 'react-icons/fa';


function Books() {
  const [page, setPage] = useState("https://gutendex.com/books/?page=2");
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const getBooksssre = async () => {
      await axios
        .get(`${page}`)
        .then((res) => {
         
          setbooks(res.data.results);
          setNext(res.data.next);
          setPrev(res.data.previous);
        })
        .catch((err) => console.log("wewewe", err));
    };
    getBooksssre();
  }, [page]);

  const nextPage = () => {
    setPage(next);
    //console.log();
  };
  const prvPage = () => {
    setPage(prev);
  };

  return (
    <div className="container">
      <div className=" row d-flex">
        {books.map((book) => (
          <div key={book.id} className="  col-lg-3 col-md-4 col-sm-6 ">
            <div key={book.id}>
              <div className=" ">
                <div className="book">
                  <img src={book.formats["image/jpeg"]} alt="" />
                  <h4>{book?.title}</h4>
                  <p>{book?.authors[0]?.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className='d-flex justify-content-center mt-5 mb-5 butt '>
        <button onClick={prvPage} >< FaCaretSquareLeft /> </button>
          <button onClick={nextPage}> <   FaCaretSquareRight/> </button>
          
        </div>
      </div>
    </div>
  );
}




export default Books