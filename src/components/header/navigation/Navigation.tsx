import React, { useEffect, useState } from "react";
import { useQuery } from '@apollo/client';
import "./Navigation.scss"

import { GET_CATEGORIES } from "../../../apollo/allCategories";

interface catDTO {
   name: string
}

const Navigation = () => {

   const { data, loading, error } = useQuery(GET_CATEGORIES)
   console.log(data)
   if (loading) return <h1>Loading...</h1>
   if (error) return <h2>Error :(</h2>

   return (
      data.categories.map((obj: catDTO, index: number) => <nav className="navigation" key={index}>{obj.name}</nav>)
   )
}

export default Navigation;