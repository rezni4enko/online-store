import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query AllCategories{
   categories{
     name 
     products{
       id
       name
       inStock
       gallery
       description
       category
       attributes{
         id
         name
         type 
         items{
           displayValue
           value
           id
         }
       }
       prices{
         currency{
           label
           symbol
         }
                 amount
       }
       brand
     }
       }
 }
 `;