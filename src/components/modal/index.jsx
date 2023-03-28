const Modal = ({ winner }) => {
  const style = {
    "margin-left": "28rem",
    "margin-bottom": "20rem",
    "background-color": "#61dafb",
    width: "22rem",
    height: "10rem",
    border: "4px solid black",
    "border-radius": "5px",
    position: "relative",
  };
  return (
    <>
      <div className="z-10" style={style}>
        <div className="text-green-900 text-4xl flex mt-10 justify-center">
          Winner is {winner}🎉
        </div>
      </div>
    </>
  );
};

export default Modal;
