export default function Header() {
    return (
      <div className="flex lg:mx-auto" style={{maxWidth: "1280px"}}> 
      {/* md:items-center md:justify-between  */}
        <div className="min-w-0 flex-1" >
          <h2 className="lg:items-center px-3 py-2 ml-5 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            <img className="w-20 h-20" src ="src\assets\PNGIcon.png"/>
          </h2>
        </div>
        <div className="flex py-2 md:ml-4 md:mt-0">
          <button
            type="button"
            className="inline-flex place-self-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Presskit
          </button>
          <button
            type="button"
            className="mr-5 ml-3 inline-flex place-self-center rounded-md bg-sky-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact
          </button>


        </div>
      </div>
    )
  }