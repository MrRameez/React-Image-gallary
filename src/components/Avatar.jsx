function Avatar({ img, username, title = "---", onClick, bgColor, textColor }) {
    return (
      <div 
        onClick={onClick}
        style={{
          backgroundColor: bgColor || "white",
          color: textColor || "black",
        }}
        className="m-3 p-1 cursor-pointer rounded-lg"
      >
        <div className="mt-2">
          <div className="p-2">
            <img 
              className="h-full max-h-28 w-full max-w-28 rounded-lg ring-2 ring-white"
              src={img}
              alt={`${username}'s avatar`}
            />
          </div>
          <div className="ml-3">
            <h1 className="font-bold text-left">{title}</h1>
            <h1 className="font-medium text-left">{username}</h1>
          </div>
        </div>
      </div>
    );
  }
  
  export default Avatar;
  