import { setStateStore } from "@/store/setStateStore";
import { observer } from "mobx-react-lite";
import React, { ChangeEvent, ReactElement } from "react";

const  SearchText= observer(()=>  {
  const {searchText,setSearchText}=setStateStore;
  const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="restaurantName"
        id="restaurantName"
        autoComplete="restaurantName"
        placeholder="...ค้นหาชื่อหนัง..."
        className="p-1 sm:p-2 mt-1 text-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-[300px] shadow-sm lg:text-sm border-gray-300 rounded-md"
        value={searchText}
        onChange={handleInputChanged}
        />
    </div>
  );
}
)
export default SearchText;
