import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["OverWatch"]);


  return (
    <div>
      <h2>Gif Expert</h2>
      <AddCategory setCategorias = { setCategorias } />
      <hr />

      <ol>
        {
          categorias.map( cat => 
            <GifGrid key={ cat } categoria={ cat } />
          )
        }
      </ol>
    </div>
  );
};
