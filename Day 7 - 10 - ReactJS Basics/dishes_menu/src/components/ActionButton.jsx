const ActionButton = ({title, link}) => {
    return (
        <a href={link} target ="_blank" rel="noreferrer">
          <button className="bg-blue-400 m-1 px-3 py-1 rounded-2xl cursor-pointer hover:bg-amber-600 transition-all duration-300">
            {title}
          </button>
        </a>


    )
}

export default ActionButton;