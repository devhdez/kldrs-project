const navigation = {
  main: [
  ],
  social: [
    {
      name: 'Threads',
      href: 'https://www.threads.net/@danielkilders',
      icon: (props) => (
        <svg className ="text-gray-400 hover:text-gray-500"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
          <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z"/>
          </svg>
        ),
      key:1,
    },
    {
      name: 'X',
      href: 'https://twitter.com/danielkilders/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
      key:2,
    },
  ],
}

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
          {navigation.social.map((item) =>
            <a className="inline-flex place-self-center bg-white mx-3 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50" key={item.name} href={item.href}> 
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          )}
          <button
            type="button"
            className="inline-flex place-self-center rounded-md bg-white mx-3 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Presskit
          </button>
          <button
            type="button"
            onClick={() => window.location = 'mailto:hi@swiftstudyapp.com'}
            className="mr-5 ml-3 inline-flex place-self-center rounded-md bg-amber-100 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contact
          </button>


        </div>
      </div>
    )
  }