  import { serverurl } from "./serverurl";
  import { commonApi } from "./commonApi";

  //upload vedio
  export const uploadvedio=async(data)=>{
      
                    return await commonApi('POST',`${serverurl}/videos`,data);
                  }