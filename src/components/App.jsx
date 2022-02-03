import {useState, useEffect} from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import axios from "axios";

const API_KEY = '24451027-294a199a6fff21fcc9d265d96';
const BASE_URL = 'https://pixabay.com/api/';
export default function App() {
  const [searchResults, setSearchResults] = useState('');
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImages, setLargeImages] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchResults === '') {
      return
    }

    async function FetchImages () {
      setIsLoad(true);
      try {
        const response = await axios.get(`${BASE_URL}?q=${searchResults}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);        
        const currentImg = response.data.hits.map(({id, webformatURL, largeImageURL}) => {
          return {id, webformatURL, largeImageURL};
        });
        setImages(prevState => [...prevState, ...currentImg] )
          if (response.data.hits.length === 0) {
            alert(`по запросу ${searchResults} изображений не найдено`)
          }
         
      } catch (error) {
        setError( error );
      } finally {
        setIsLoad(false)
        
      }      
    }
    FetchImages()
  }, [searchResults, page]);

  const hendleSearchbarSubmit = searchResults => {
    setSearchResults(searchResults);
    setImages([]);
    setPage(1);
  }
  const hendleLargeImages = largeImages => {
    setLargeImages(largeImages)
  }
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  // const hendleClickLoadMore = () => {
  //   setPage(prevState => prevState + 1)
  // }
 
    return (
    <>
      <Searchbar onSubmit={hendleSearchbarSubmit}/>      
      {error && <Error />}
      {images.length > 0 && <ImageGallery 
        images={images}
        toggleM={toggleModal}
        largeUrl={hendleLargeImages}
      />}
      {images.length > 0 && <Button setPage={setPage}/>}
      {showModal && <Modal onClose={toggleModal} srsLarge={largeImages}/>}
      {isLoad && <Loader />}
    </>
    )
  
}

