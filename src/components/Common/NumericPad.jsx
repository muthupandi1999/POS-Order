export const NumericKeypad = ({ onNumberClick, onDotClick, onDeleteClick }) => {
  const handleNumberClick = (number) => {
    onNumberClick(number);
  };

  const handleDotClick = () => {
    onDotClick();
  };

  const handleDeleteClick = () => {
    onDeleteClick();
  };

  return (
    <div className="pt-6">
      <div className="flex justify-evenly items-center py-4">
        {[1, 2, 3].map((number) => (
          <button
            className="text-xl w-10 h-10 flex justify-center items-center"
            key={number}
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex justify-evenly items-center py-4">
        {[4, 5, 6].map((number) => (
          <button
            className="text-xl w-10 h-10 flex justify-center items-center"
            key={number}
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex justify-evenly items-center py-4">
        {[7, 8, 9].map((number) => (
          <button
            className="text-xl w-10 h-10 flex justify-center items-center"
            key={number}
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex justify-evenly items-center py-4">
        <button
          className="text-xl w-10 h-10 flex justify-center items-center"
          onClick={handleDotClick}
        >
          .
        </button>
        <button
          className="text-xl w-10 h-10 flex justify-center items-center"
          onClick={() => handleNumberClick(0)}
        >
          0
        </button>
        <button
          className="text-xl w-10 h-10 flex justify-center items-center"
          onClick={handleDeleteClick}
        >
          x
        </button>
      </div>
    </div>
  );
};
