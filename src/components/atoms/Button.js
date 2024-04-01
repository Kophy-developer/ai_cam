const Button = ({ text, type, look, onClick }) => {
  let className;
  if (look === 2) {
    className = `border-gray-500 bg-gray-900 hover:bg-white hover:text-gray-900 text-white `;
  } else if (look === 3) {
    className = `border-blue-400 bg-white text-blue-400 hover:bg-blue-700 hover:text-white`;
  } else {
    className = `border-gray-500 bg-white text-gray-900 hover:text-white hover:bg-gray-900`;
  }
  return (
    <button
      className={`border font-bold border-1 rounded h-[2.5rem] flex gap-2 p-2 items-center justify-center text-[.9rem] ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
