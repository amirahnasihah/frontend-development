import "./styles.css";
import Blog from "./components/Blog";

export default function App() {
  const posts = [
    {
      id: 1,
      title: "buildspace web3 demo showcase!",
      content:
        "Last night's buildspace demo day was a blast, as was go-karting around the map on gather.town dressed as a pumpkin. It's a massive web3 display! Over…"
    },
    {
      id: 2,
      title: "ReactJS - Introduction",
      content:
        "What is ReactJS? ➡️declarative, efficient, and flexible JavaScript library for building reusable UI components. ➡️an open-source, component-based…"
    },
    {
      id: 3,
      title: "Build Metaverse with Gather.Town for Free",
      content:
        "Gather.Town Looking for more interactive web-conferencing software like Zoom, but with more fun virtual interactions just like in real life. Then, you…"
    }
  ];

  return (
    <div>
      <Blog posts={posts} />
      <hr />
      <h3 className="App">Start editing to see some hashnode happen!</h3>
    </div>
  );
}
