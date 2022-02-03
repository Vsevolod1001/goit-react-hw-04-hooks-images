import  {useState} from "react";
import { SearchbarHeader, SearchForm, SearchFormInput, SearchFormBtn } from "./Searchbar.styled";
import PropTypes from "prop-types";
import { FiSearch } from 'react-icons/fi';

export default function Searchbar ({onSubmit}) {
  const [searchPic, setSearchPic] = useState('');
 
  const hendleChangeName = e => {
    setSearchPic(e.currentTarget.value)
  }
  const hendleSubmit = e => {
    e.preventDefault();
    if (searchPic.trim() === '') {
      alert('введите название поиска')
      return;
    }
    onSubmit(searchPic)
    setSearchPic('');
  }

 
    return (
      <SearchbarHeader>
      <SearchForm onSubmit={hendleSubmit}>
        <SearchFormBtn type="submit">
          <span>
            <FiSearch size={30}/>
          </span>
        </SearchFormBtn>

        <SearchFormInput          
          type="text"
          autocomplete="off"
          // autofocus
          value={searchPic}
          onChange={hendleChangeName}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
    );
  
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}