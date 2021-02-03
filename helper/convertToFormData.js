import { API } from "./CONST";

const convertToFormData = (object) => {
  const formData = new FormData();
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      formData.append(property, object[property]);
    }
  }
  return formData;
};

export default convertToFormData;
