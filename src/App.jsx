import React from "react";
import Search from "./Component/Search";
import Pagination from "./Component/Pagination";
import Stories from "./Component/Stories";

export default function App() {
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-serif text-3xl my-4 "> Tech-News-App </h1>
        <Search />

        <Pagination />
        <Stories />

        
      </div>
    </>
  );
}
