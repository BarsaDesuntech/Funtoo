const PRODUCTION = true
const END_POINT = PRODUCTION
  ? //  "https://funtoo.invoice2day.in/"
    "https://funworks.in/"
    :"https://funworks.in/funtootest/";
  // : "https://ehostingguru.com/stage/funtoo/";
export default {
  CORS_URL: `https://cors-anywhere.herokuapp.com/`,
  BASE_URL: `${END_POINT}api/`,
  SUCCESS_TYPE: "success",
  FAILURE_TYPE: "failure",
  TIMER_VALUE: 60,
  PHONE_NUMBER_COUNTRY_CODE: "+91",
  GENDERS: ["Male", "Female", "Others"],
  STATUS_ONBOARDING: "onboarding",
  STATUS_APPROVED: "approved",
  STATUS_BANNED: "banned",
  UPLOAD_PATH: `${END_POINT}uploads/`,
  IMAGE_URL: `${END_POINT}uploads/images/`,
  SLIDER_URL: `${END_POINT}uploads/slider/`,
  NEW_COLLECTION_URL: `${END_POINT}uploads/game/`,
  CATEGORY_IMAGE_URL: `${END_POINT}uploads/category/`,
  SUB_CATEGORY_IMAGE_URL: `${END_POINT}uploads/game/`,
  GAME_GALLERY_IMAGE_URL: `${END_POINT}uploads/gameimage/`,
  GAME_PARTS_URL: `${END_POINT}uploads/game_parts/`,
  GOOGLE_PLACE_API_KEY: "AIzaSyAHG9wJDJThFRp7aZdG9O2LMRvSRXjjois",
};

export const ToFormData = (obj) => {
  let formdata = new FormData();
  for (let key in obj) {
    formdata.append(key, obj[key]);
  }
  return formdata;
};

export function BuildSeachParams(obj) {
  let searchParams = new URLSearchParams(obj);

  return searchParams.toString();
}
