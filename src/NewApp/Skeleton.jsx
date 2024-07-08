const Skeleton = () => {
  return (
    <div style={{ minHeight: "75.5vh" }}>
      <div className="flex fixed z-50 opacity-90 h-full w-full justify-center items-center">
        <div className="flex justify-center flex-col items-center">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
          <p className="font-bold text-lg relative flex flex-row text-blue-600">
            Loading, please wait
            <span className="flex space-x-1 absolute top-4 -right-6 items-center dark:invert">
              <span className="h-1 w-1 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="h-1 w-1 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="h-1 w-1 bg-blue-600 rounded-full animate-bounce"></span>
            </span>
          </p>
        </div>
      </div>
      <div className="flex p-4 justify-evenly flex-wrap animate-pulse">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="shadow-sm shadow-black opacity-40 bg-white m-3 rounded-lg p-2 relative animate-pulse"
          >
            <div className="max-w-xs max-h-7 bg-red-500 overflow-hidden text-white text-lg px-2 rounded-md absolute right-3 -top-2">
              <div className="w-24 h-6 bg-red-500 rounded"></div>
            </div>
            <div className="m-3 rounded-lg p-2 sm:p-4 max-sm:w-48 max-sm:h-80 md:p-6 w-72 h-80 flex flex-col">
              <div className="shadow-sm shadow-black border rounded-md w-full h-28 bg-gray-300"></div>
              <h2 className="text-2xl max-sm:text-lg max-sm:font-semibold font-bold mb-4 mt-4">
                <div className="w-3/4 h-6 bg-gray-300 rounded mb-2"></div>
                <div className="w-1/2 h-6 bg-gray-300 rounded"></div>
              </h2>
              <p className="text-gray-700">
                <span className="w-full h-4 bg-gray-300 rounded mb-2"></span>
                <span className="w-full h-4 bg-gray-300 rounded mb-2"></span>
                <span className="w-3/4 h-4 bg-gray-300 rounded"></span>
              </p>
            </div>
            <div className="m-3">
              <div className="w-24 h-8 bg-gray-300 shadow-black shadow-sm rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
