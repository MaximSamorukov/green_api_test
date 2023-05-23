/* eslint-disable import/prefer-default-export */
import config from "../constants";

export const useConnect = () => {
  const sendMessage = (data) => {
    return fetch(
      config.REQUEST_URL.replace(
        ":idInstance",
        !!data.idInstance.trim() || process.env.REACT_APP_ID_INSTANCE
      ).replace(
        ":apiTokenInstance",
        !!data.apiTokenInstance.trim() ||
          process.env.REACT_APP_API_TOKEN_INSTANCE
      ),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return {
    sendMessage,
  };
};
