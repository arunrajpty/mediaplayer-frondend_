import axios from "axios";
import { serverurl } from "./serverurl";

//post
export const eassyuploadvideo=async(data)=>{
    const serverlink=`${serverurl}/videos`
    return await axios.post(serverlink,data,{headers:{"Content-Type":'application/json'}})
        .then((res)=>{return res})
        .catch((err)=>{console.error(err)})
}

//get
export const getallvideos=async()=>{
     const serverlink=`${serverurl}/videos`
      return await axios.get(serverlink)
       .then((res)=>{return res})
    .catch((err)=>{console.error(err)})
}

//delete
export const deletevideo=async(id)=>{
    const serverlink=`${serverurl}/videos/${id}`
    return await axios.delete(serverlink)
    .then((res)=>{return res})
    .catch((err)=>{console.error(err)})
}

//add history
export const addhistory=async(data)=>{
    const serverlink=`${serverurl}/history`
    return await axios.post(serverlink,data,{headers:{"Content-Type":'application/json'}})
      .then((res)=>{return res})
    .catch((err)=>{console.error(err)})
}

//get history
export const gethistory=async()=>{
     const serverlink=`${serverurl}/history`
      return await axios.get(serverlink)
       .then((res)=>{return res})
    .catch((err)=>{console.error(err)})
}
//delete history
export const deletehistory=async(id)=>{
    const serverlink=`${serverurl}/history/${id}`
    return await axios.delete(serverlink)
    .then((res)=>{return res})
    .catch((err)=>{console.error(err)})
}
//post category
export const addcategory=async(data)=>{
    const serverlink=`${serverurl}/category`
     return await axios.post(serverlink,data,{headers:{"Content-Type":'application/json'}})
}
//get category
export const getcategory=async()=>{
     const serverlink=`${serverurl}/category`
      return await axios.get(serverlink)
       .then((res)=>{return res})
    .catch((err)=>{console.error(err)})
}

//delete category
export const deletecategory=async(id)=>{
    const serverlink=`${serverurl}/category/${id}`
    return await axios.delete(serverlink)
    .then((res)=>{return res})
    .catch((err)=>{console.error(err)})
}
//getvideobyid
export const getvideobyid=async(id)=>{
     const serverlink=`${serverurl}/history/${id}`
      return await axios.get(serverlink)
       .then((res)=>{return res})
    .catch((err)=>{console.error(err)})
}
///put
export const putvideo=async(data ,id)=>{
    const serverlink=`${serverurl}/category/${id}`
    return await axios.put(serverlink,data)
        .then((res)=>{return res})
        .catch((err)=>{console.error(err)})
}
