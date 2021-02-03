import { API } from "./CONST";

const removePublic = (path) => {
  let finalPath = API;
  path = path.replace("public", "");
  finalPath += path;
  return finalPath;
};

export default removePublic;
