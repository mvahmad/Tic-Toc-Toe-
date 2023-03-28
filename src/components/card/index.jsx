const Card = ({ values, handelClick }) => {
  return (
    <div className="ml-96 flex  gap-20">
      <div className=" flex w-72 flex-wrap gap-3">
        {values.map((item, index) => (
          <div
            className="bg-slate-300 w-20 h-20 shadow-inner flex justify-center items-center z-0  "
            key={index}
            onClick={() => handelClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="felx flex-col gap-3">
        <h1 className="text-4xl font-sans">
          Player1 : <span className="text-red-400">X</span>
        </h1>
        <h1 className="text-4xl mt-3 font-sans">
          Player2 : <span className="text-blue-400">O</span>
        </h1>
      </div>
    </div>
  );
};
export default Card;
