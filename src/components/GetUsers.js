import axios from "axios";

class GetUsers {
  async getApi() {
    return axios({
      method: "GET",
      url: "https://reqres.in/api/unknown",
      headers: {
        Authorization: `Bearer {token: 'QpwL5tke4Pnpja7X4'}`,
        "Content-type": "application/json",
      },
    })
      .then(function (response) {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
}

export default GetUsers;
