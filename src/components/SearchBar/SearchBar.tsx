import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({onSubmit}: any) {

  const [value, setValue] = useState('');

  function submit(e: any) {
    if(e.key === "Enter" && e.target.value.trim() !== "") {
      console.log(e.target.value);
      onSubmit(e.target.value);
      setValue('');
    }
  }

  function HandleChange(e: any) {
    setValue(e.target.value);
  }
  
    return (
      <>
        <SearchIcon size={27} className={s.icon} />
        <input 
              className={s.input} 
              onKeyUp={submit}
              onChange={HandleChange}
              value={value}
              placeholder="Search a tv show you may like"
              type="text"
         />
      </>
    );
}