import Header from "./components/Header";
import Logo from "./components/Logo";
import logo from "./icons/github-icon.svg";
import Wrapper from "./components/Wrapper";
import Search from "./components/Search";
import searchIcon from "./icons/search-icon-s.svg";
import Main from "./components/Main";
import StartComponent from "./components/StartComponent";
import startComponentIcon from "./icons/search-icon-l.svg";
import StartPage from "./components/pages/StartPage";
import UserNotFoundComponent from "./components/UserNotFoundComponent";
import userIcon from "./icons/user-icon.svg";
import User from "./components/User";
import userPhoto from "./icons/user-photo.jpg";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import RepositoriesTable from "./components/RepositoriesTable";

const searchPlaceholderText = "Enter GitHub username";
const startComponentText = "Start with searching a GitHub user";
const userNotFoundComponentText = "User not found";

const userExample = {
  userName: "Nastya Lebedevich",
  nickname: "summer.knigt",
  photo: userPhoto,
  link: "https://github.com/deadbeathd07",
  repositories: [
    { title: "My work1", text: "It's my new project!" },
    { title: "My work2", text: "It's my new project!" },
    { title: "My work3", text: "It's my new project!" },
    { title: "My work4", text: "It's my new project!" },
    { title: "My work5", text: "It's my new project!" },
    { title: "My work6", text: "It's my new project!" },
    { title: "My work7", text: "It's my new project!" },
    { title: "My work8", text: "It's my new project!" },
    { title: "My work9", text: "It's my new project!" },
    { title: "My work10", text: "It's my new project!" },
    { title: "My work11", text: "It's my new project!" },
    { title: "My work12", text: "It's my new project!" },
    { title: "My work13", text: "It's my new project!" },
    { title: "My work14", text: "It's my new project!" },
    { title: "My work15", text: "It's my new project!" },
    { title: "My work16", text: "It's my new project!" },
    { title: "My work17", text: "It's my new project!" },
    { title: "My work18", text: "It's my new project!" },
    { title: "My work19", text: "It's my new project!" },
    { title: "My work20", text: "It's my new project!" },
    { title: "My work21", text: "It's my new project!" },
    { title: "My work22", text: "It's my new project!" },
    { title: "My work23", text: "It's my new project!" },
    { title: "My work24", text: "It's my new project!" },
    { title: "My work1", text: "It's my new project!" },
    { title: "My work2", text: "It's my new project!" },
    { title: "My work3", text: "It's my new project!" },
    { title: "My work4", text: "It's my new project!" },
    { title: "My work5", text: "It's my new project!" },
    { title: "My work6", text: "It's my new project!" },
    { title: "My work7", text: "It's my new project!" },
    { title: "My work8", text: "It's my new project!" },
    { title: "My work9", text: "It's my new project!" },
    { title: "My work10", text: "It's my new project!" },
    { title: "My work11", text: "It's my new project!" },
    { title: "My work12", text: "It's my new project!" },
    { title: "My work13", text: "It's my new project!" },
    { title: "My work14", text: "It's my new project!" },
    { title: "My work15", text: "It's my new project!" },
    { title: "My work16", text: "It's my new project!" },
    { title: "My work17", text: "It's my new project!" },
    { title: "My work18", text: "It's my new project!" },
    { title: "My work19", text: "It's my new project!" },
    { title: "My work20", text: "It's my new project!" },
    { title: "My work21", text: "It's my new project!" },
    { title: "My work22", text: "It's my new project!" },
    { title: "My work23", text: "It's my new project!" },
    { title: "My work24", text: "It's my new project!" },
  ],
  followers: 24,
  following: 27,
};

function App() {
  const [isLoaded, setIsloaded] = useState(false);
  const [value, setValue] = useState("");
  const [user, setUser] = useState(undefined);
  const [userRepos, setUserRepos] = useState(undefined);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setValue(event.target.value);
      setIsloaded(true);
    }
  }

  function getUser(value) {
    value !== "" &&
      fetch(`https://api.github.com/users/${value}`)
        .then((response) => {
          if (response.status !== 200) {
            console.log(
              "looks like there was a problem. Status Code: " + response.status
            );
            setIsloaded(false);
            setUser(null);
            return;
          }
          response.json().then((data) => {
            setUser(data);
            setIsloaded(false);
          });
        })
        .catch((err) => console.log("Fetch Error : -S", err));
  }
  function getUserRepos(value) {
    value !== "" &&
      fetch(`https://api.github.com/users/${value}/repos`)
        .then((response) => {
          if (response.status !== 200) {
            console.log(
              "looks like there was a problem. Status Code: " + response.status
            );
            setUserRepos(null);
            return;
          }
          response.json().then((data) => {
            setUserRepos(data);
          });
        })
        .catch((err) => console.log("Fetch Error: -S", err));
  }

  useEffect(() => {
    getUser(value);
    getUserRepos(value);
  }, [value]);

  function getElem() {
    if (user === undefined && userRepos === undefined) {
      return (
        <StartComponent icon={startComponentIcon} text={startComponentText} />
      );
    } else if (isLoaded === true) {
      return <Loader />;
    } else {
      if (user === null && userRepos === null) {
        return (
          <UserNotFoundComponent
            icon={userIcon}
            text={userNotFoundComponentText}
          />
        );
      } else {
        return <User user={user} userRepos={userRepos} />;
      }
    }
  }

  return (
    <>
      <Wrapper>
        <Header>
          <Logo logo={logo} />
          <Search
            value={value}
            handleKeyPress={handleKeyPress}
            searchIcon={searchIcon}
            placeholder={searchPlaceholderText}
          />
        </Header>
        <Main>
          <StartPage>{getElem()}</StartPage>
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
