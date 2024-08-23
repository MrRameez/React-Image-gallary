import './App.css';
import Avatar from './components/Avatar';

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      username: "star",
      title: "universe",
      bgColor: "skyblue",
      textColor: "black",
    },
    {
      img: "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      username: "star",
      title: "universe",
      bgColor: "brown",
      textColor: "white",
    },
    {
      img: "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      username: "star",
      title: "universe",
      bgColor: "brown",
      textColor: "white",
    },
    {
      img: "https://images.unsplash.com/photo-1712510795837-683b93b2b95e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      username: "star",
      title: "universe",
      bgColor: "skyblue",
      textColor: "black",
    },
  ];

  return (
    <div>
      <h1 className="text-sky-400 text-3xl underline text-center font-semibold my-4">
        React Image Gallery
      </h1>

      <div className="bg-black mt-2 p-2 flex justify-center">
        {users.map((data, index) => (
          <Avatar
            key={index}
            img={data.img}
            username={data.username}
            title={data.title}
            bgColor={data.bgColor}
            textColor={data.textColor}
            onClick={() => console.log(data)}
          />
        ))}
      </div>
      <div className="bg-black mt-2 p-2 flex justify-center">
        {users.map((data, index) => (
          <Avatar
            key={index}
            img={data.img}
            username={data.username}
            title={data.title}
            bgColor={data.bgColor}
            textColor={data.textColor}
            onClick={() => console.log(data)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
