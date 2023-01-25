import React, { ReactElement } from "react";

function SearchText(): ReactElement {
  return (
    <div>
      <input
        type="text"
        name="restaurantName"
        id="restaurantName"
        autoComplete="restaurantName"
        placeholder="ค้นหาชื่อหนัง..."
        className="p-1 sm:p-2 mt-1 text-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:w-[300px] shadow-sm lg:text-sm border-gray-300 rounded-md"
      />
    </div>
  );
}

export default SearchText;
