const baseUrl = "https://ai-crm.onrender.com/";
import axios from "axios";

const axiosPublic = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const httpMethod = {
  GET: "GET",
  PATCH: "PATCH",
  POST: "POST",
  DELETE: "DELETE",
};

export const sendRequest = async (url, isPublic, body, method = "GET") => {
  try {
    let response;

    if (method === httpMethod.GET) {
      await axiosPublic.get(url);
    } else if (method === httpMethod.DELETE) {
      await axiosPublic.delete(url, { data: body });
    } else if (method === httpMethod.PATCH) {
      await axiosPublic.patch(url, body);
    } else {
      response = isPublic;
      await axiosPublic.post(url, body);
    }

    // Axios returns the data directly, no need for response.json()
    const data = response.data;
    return data;
  } catch (error) {
    let message;

    if (error.response) {
      if (error.response.data) {
        if (error.response.data.email) {
          message = error.response.data.email[0];
        } else if (error.response.data.non_field_errors) {
          message = error.response.data.non_field_errors[0];
        }
      }
      message = message || error.response.data.message;
    } else if (error.request) {
      message = "Check your internet connection";
    } else {
      message = error.message;
    }

    return { error: true, message };
  }
};
