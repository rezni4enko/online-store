import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';

import { GET_CATEGORIES } from "../apollo/allCategories";

interface catDTO {
   name: string
}

const Main = () => {

   const { data, loading, error } = useQuery(GET_CATEGORIES)
   console.log(data)
   if (loading) return <h1>Loading...</h1>
   if (error) return <h2>Error :(</h2>

   return (
      data.categories.map((obj: catDTO, index: number) => <div key={index}>{obj.name}</div>)
   )
}

export default Main;