import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import cryptoTipsService from "../../Respository/cryptoTipsRepository";
import Post from "../Posts/ListPosts/posts";
import AddPost from "../../Component/Posts/PostAdd/addPost";
import EditPost from "../Posts/EditPost/EditPost";
import Membership from "../Memberships/Memberships";
import Subscribers from "../Subscribers/ListSubscribers/Subscribers";
import AddSubscriber from "../Subscribers/AddSubscriber/AddSubscriber";
import Analyze from "../Analyze/ListAnalyze/ListAnalyze";
import AnalyzeAdd from "../Analyze/AnalyzeAdd/AnalyzeAdd";
import AnalyzeEdit from "../Analyze/AnalyzeEdit/AnalyzeEdit";
import AnalyzeView from "../Analyze/AnalyzeView/AnalyzeView";
import Home from "../Home/Home";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./App";
import Login from "../Login/login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      subscribers: [],
      analysis: [],
      selectedPost: {},
      selectedAlanyze: {},
    };
  }

  render() {
    return (
      <Router>
        <Header />
        <main>
          <Routes>
            <Route
              path="/post/edit/:id"
              element={
                <EditPost
                  post={this.state.selectedPost}
                  onEdit={this.editPost}
                />
              }
            />
            <Route
              path="/post/add"
              element={<AddPost onPostAdd={this.addPost} />}
            />
            <Route
              path={"/post"}
              element={
                <Post
                  posts={this.state.posts}
                  onDelete={this.deletePost}
                  getPost={this.getCurrnetPost}
                />
              }
            />
            <Route
              path="/memberships"
              element={<Membership onSubscriberAdd={this.addSubscriber} />}
            />
            <Route
              path="/subscribers/add"
              element={<AddSubscriber onSubscriberAdd={this.addSubscriber} />}
            />

            <Route
              path="/subscribers"
              element={
                <Subscribers
                  subscribers={this.state.subscribers}
                  onDelete={this.deleteSubscriber}
                />
              }
            />
            <Route
              path="/analyze/edit/:id"
              element={
                <AnalyzeEdit
                  onEdit={this.editAnalyze}
                  analyze={this.state.selectedAlanyze}
                />
              }
            />
            <Route
              path="/analyze/add"
              element={<AnalyzeAdd onAnalyzeAdd={this.addAnalyze} />}
            />
            <Route
              path="/analyze"
              element={
                <Analyze
                  analysis={this.state.analysis}
                  onDelete={this.deleteAnalyze}
                  getAnalyze={this.getCurrnetAnalyze}
                />
              }
            />
            <Route
              path="/view/:id"
              element={<AnalyzeView term={this.state.selectedAlanyze} />}
            />
            <Route path="/home" element={<Home />} />
            <Route
              path={"/login"}
              exact
              render={() => <Login onLogin={this.fetchData} />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    );
  }

  componentDidMount() {
    this.loadPosts();
    this.loadSubscribers();
    this.loadAnalyze();
  }

  loadPosts = () => {
    cryptoTipsService.fetchPosts().then((data) => {
      this.setState({
        posts: data.data,
      });
    });
  };
  loadAnalyze = () => {
    cryptoTipsService.fetchAnalye().then((data) => {
      this.setState({
        analysis: data.data,
      });
    });
  };

  addPost = (title, description, image) => {
    cryptoTipsService.addPost(title, description, image).then(() => {
      this.loadPosts();
    });
  };

  addSubscriber = (username) => {
    cryptoTipsService.addSubscriber(username).then(() => {
      this.loadSubscribers();
    });
  };

  addAnalyze = (title, part1, part2, part3, part4) => {
    cryptoTipsService.addAnalyze(title, part1, part2, part3, part4).then(() => {
      this.loadAnalyze();
    });
  };

  deletePost = (id) => {
    cryptoTipsService.deletePost(id).then(() => {
      this.loadPosts();
    });
  };
  deleteAnalyze = (id) => {
    cryptoTipsService.deleteAnalyze(id).then(() => {
      this.loadAnalyze();
    });
  };

  deleteSubscriber = (id) => {
    cryptoTipsService.deleteSubscriber(id).then(() => {
      this.loadSubscribers();
    });
  };

  editPost = (id, title, description, image) => {
    cryptoTipsService.editPost(id, title, description, image).then(() => {
      this.loadPosts();
    });
  };

  editAnalyze = (id, title, part1, part2, part3, part4) => {
    cryptoTipsService
      .editAnalyze(id, title, part1, part2, part3, part4)
      .then(() => {
        this.loadAnalyze();
      });
  };

  getCurrnetPost = (id) => {
    cryptoTipsService.getById(id).then((data) => {
      this.setState({
        selectedPost: data.data,
      });
    });
  };
  getCurrnetAnalyze = (id) => {
    cryptoTipsService.getByIdAnalyze(id).then((data) => {
      this.setState({
        selectedAlanyze: data.data,
      });
    });
  };

  loadSubscribers = () => {
    cryptoTipsService.fetchSubscribers().then((data) => {
      this.setState({
        subscribers: data.data,
      });
    });
  };
}

export default App;
