import React from "react";
import { useGlobalContext } from "../context/Context";

export default function Stories() {
  const { hits ,removePost,isLoading} = useGlobalContext();
  // console.log(hits);

  if(isLoading){
    return(
        <div className="mt-36">
            <h1 className="text-xl">Loading...</h1>
        </div>
    )
  }

  return (
    <>
      <div className="w-full flex justify-center flex-col items-center mt-6">
        

        {hits.map((storiesPost) => {
          const { title, objectID, author,url,num_comments} = storiesPost;
          return (
            <div key={objectID} className="sm:w-[40%] border  m-4">
              <div className="card p-7">
                <h1 className="text-xl font-serif"> {title} </h1>
                <p className="py-5 text-[17px]"> <span className="text-gray-500"> By </span>   {author} | <span>{num_comments} </span>  <span className="text-gray-500"> comments </span> </p>

                <div className="flex justify-between">
                    <button>
                        <a  href={url} target="_blank" className="text-blue-400 text-[18px]">Read More</a>
                    </button>
                    <button>
                        <a href="#"  onClick={()=>removePost(objectID)} className="text-red-600 text-[18px]">Remove</a>
                    </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </>
  );
}
