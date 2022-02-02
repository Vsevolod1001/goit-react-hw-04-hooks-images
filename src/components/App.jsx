import React, {Component} from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";
import axios from "axios";

const API_KEY = '24451027-294a199a6fff21fcc9d265d96';
const BASE_URL = 'https://pixabay.com/api/';
class App extends Component {
  state = {
    searchResults: '',
    images: [],
    showModal: false,
    largeImages: '',
    isLoad: false,
    page: 1,
    error: null,
  }
  
   async componentDidUpdate (prevProps, prevState) { 
        const nextName = this.state.searchResults; 
        const prevName = prevState.searchResults ;   
        const { page, searchResults } = this.state;
          
        if (prevName !== nextName || prevState.page !== page) {  
          this.setState({isLoad: true})
          if (prevName !== nextName)  {
            this.setState({page: 1})
          }
            try {
              const response = await axios.get(`${BASE_URL}?q=${nextName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
              console.log(response)
              const currentImg = response.data.hits.map(({id, webformatURL, largeImageURL}) => {
                return {id, webformatURL, largeImageURL};
              });
              this.setState((prevState) => ({ 
                images: [...prevState.images, ...currentImg] }))
                if (response.data.hits.length === 0) {
                  alert(`по запросу ${searchResults} изображений не найдено`)
                }
               
            } catch (error) {
              this.setState({ error });
            } finally {
              this.setState({isLoad: false})
              
            }            
        }        
        }
    //    fetch(`${BASE_URL}?q=${nextName}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        // .then(res => res.json())
        // .then(images => this.setState({images: images.hits}))
        // .finally(() => this.setState({isLoad: false}))
  hendleSearchbarSubmit = searchResults => {
    this.setState({searchResults, images: []})
  }
  hendleLargeImages = largeImages => {
    this.setState({largeImages})
  }
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  };
  hendleClickLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }))
  }
  render () {
    const { images, error, showModal, largeImages, isLoad } = this.state;
    const { hendleSearchbarSubmit, toggleModal, hendleLargeImages, hendleClickLoadMore } = this;
    
    
    return (
    <>
      <Searchbar onSubmit={hendleSearchbarSubmit}/>
      {isLoad && <Loader />}
      {error && <Error />}
      {images.length > 0 && <ImageGallery 
        images={images}
        toggleM={toggleModal}
        largeUrl={hendleLargeImages}
      />}
      {images.length > 0 && <Button onClick={hendleClickLoadMore}/>}
      {showModal && <Modal onClose={toggleModal} srsLarge={largeImages}/>}
      
    </>
    )
  }
}
export default App
