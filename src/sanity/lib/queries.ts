import {defineQuery} from "groq";

export const STARTUP_QUERY = defineQuery(`*[
_type=="startup" && defined(slug.current) && !defined($search)  || category match $search || title match $search || author -> name match $search ] | order(_createdAt desc){
    _id,
    title,
    description, 
    slug,
    _createdAt,
    _updatedAt,
    author -> { 
    _id,name,image,bio, username
    },
    views,
    category, 
    image, 
}`)


export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type == "startup" && _id ==$id][0]{
     _id,
    title,
    description, 
    slug,
    _createdAt,
    _updatedAt,
    author -> { 
    _id,name,image,bio 
    },
    views,
    category, 
    image, 
    pitch
 }`)


export const STARTUP_VIEWS_QUERY = defineQuery(`*[_type == "startup" && _id ==$id][0]{
    _id, views
}`)
