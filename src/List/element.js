function Element(props) {
  return (
    <div className="inline-block">
      <div className="py-8 px-8 rounded-xl shadow-xl bg-white flex items-center m-3 w-96">
        <img
          src={props.img ? props.img : "JS.png"}
          alt={props.imgalt ? props.imgalt : "Javascript Logo"}
          className="block rounded-full h-[120px] w-[120px] mx-auto"
        />
        <div className="space-y-2 flex flex-col justify-center items-center flex-1">
          <div className="flex-1 text-center mx-3">
            <p className="text-lg space-y-2 font-semibold line-clamp-1">
              {props.name ? props.name : "Name"}
            </p>
            <p className="line-clamp-2 mb-2">
              {props.description
                ? props.description
                : "This is Where the description would be."}
            </p>
          </div>
          <button
            className="px-5 py-1 text-sm font-semibold border border-blue-300 rounded-sm bg-blue-600 text-white hover:bg-blue-400"
            onClick={props.onClick}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Element;
