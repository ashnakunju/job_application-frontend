import commonAPI from "./commonAPI";
import BASEURL  from "./serverURL";

//add 
export const addTrackerAPI=async(data)=>{
    return await commonAPI("POST",`${BASEURL}/all-application`, data)
}

//get
export const getTrackerAPI=async()=>{
    return await commonAPI("GET",`${BASEURL}/all-application`)
}

// update
export const updateTrackerAPI = async (id, data) => {
  return await commonAPI("PUT", `${BASEURL}/all-application/${id}`, data);
};

//delete
export const deleteTrackerAPI = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/all-application/${id}`);
};
