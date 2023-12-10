"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchManuFacturer from "./SearchManuFacturer";
import { IoSearch, IoCarOutline } from "react-icons/io5";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type="submit"
    className={`absolute top-[14px] right-4 text-xl text-gray-400 ${otherClasses}`}
  >
    <IoSearch />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === ''){
      return alert("Fill the search")
    }

    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase())
  };

  const updateSearchParams = (manufacturer: string, model: string) => {

    const searchParams = new URLSearchParams(window.location.search)

    if(model){
      searchParams.set('model', model)
    }else{
      searchParams.delete('model')
    }
    
    if(manufacturer){
      searchParams.set('manufacturer', manufacturer)
    }else{
      searchParams.delete('manufacturer')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-bar-item">
        <SearchManuFacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="search-bar-item">
        <IoCarOutline className="absolute top-[14px] text-xl ml-4 text-gray-500" />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="search-bar-input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
