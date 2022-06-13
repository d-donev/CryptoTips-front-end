import axios from "../Custom-axios/axios";

const cryptoTipsService = {
  fetchPosts: () => {
    return axios.get("/post");
  },
  addPost: (title, description, image) => {
    return axios.post("/post/add", {
      title: title,
      description: description,
      image: image,
    });
  },
  deletePost: (id) => {
    return axios.delete(`/post/delete/${id}`);
  },
  editPost: (id, title, description, image) => {
    return axios.put(`/post/edit/${id}`, {
      title: title,
      description: description,
      image: image,
    });
  },
  getById: (id) => {
    return axios.get(`/post/${id}`);
  },
  fetchSubscribers: () => {
    return axios.get("/subscribers");
  },
  addSubscriber: (username) => {
    return axios.post(`/subscribers/add/${username}`, {
      username: username,
    });
  },
  deleteSubscriber: (id) => {
    return axios.delete(`/subscribers/delete/${id}`);
  },

  fetchAnalye: () => {
    return axios.get("/analyze");
  },
  addAnalyze: (title, part1, part2, part3, part4) => {
    return axios.post("/analyze/add", {
      title: title,
      part1: part1,
      part2: part2,
      part3: part3,
      part4: part4,
    });
  },
  deleteAnalyze: (id) => {
    return axios.delete(`/analyze/delete/${id}`);
  },
  editAnalyze: (id, title, part1, part2, part3, part4) => {
    console.log(id);
    console.log(title);
    console.log(part1);
    console.log(part2);
    console.log(part3);
    console.log(part4);
    return axios.put(`/analyze/edit/${id}`, {
      title: title,
      part1: part1,
      part2: part2,
      part3: part3,
      part4: part4,
    });
  },
  getByIdAnalyze: (id) => {
    return axios.get(`/analyze/${id}`);
  },
  login: (username, password) => {
    return axios.post("/login", {
      username: username,
      password: password,
    });
  },
};

export default cryptoTipsService;
