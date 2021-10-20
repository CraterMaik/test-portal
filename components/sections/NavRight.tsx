export default function NavRight() { 
  return (
    <div className="top-0 hidden h-full overflow-hidden lg:block w-1/5 flex-none">
      <div className="mt-24 md:mt-20">
          <div className="mt-5 text-left bg-white rounded-t-lg dark:text-gray-300 dark:bg-gray-900 shadow-card">
            <div className="flex items-center justify-between p-2">
              <h1 className="mx-1">Categorias</h1>
            </div>
            <hr  className="dark:border-gray-800"/>
          </div>
          <div className="flex flex-col mb-5 overflow-auto text-sm text-left bg-white rounded-b-lg scrollbar dark:bg-gray-900 h-96 shadow-card">
            <a className="flex justify-between w-full px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700" href="/">
              <span>Discord.js</span>
            </a>
            <a className="flex justify-between w-full px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700" href="/">
              <span>Discord.py</span>
            </a>
            <a className="flex justify-between w-full px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700" href="/">
              <span>Npm</span>
            </a>
            <a className="flex justify-between w-full px-3 py-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700" href="/">
              <span>Dashboard</span>
            </a>
          </div>
          <div className="p-2 mt-5 text-left bg-white rounded-t-lg dark:bg-gray-900 shadow-card">
            <h1 className="mx-1">Top Usuarios</h1>
          </div>
          <hr className="dark:border-gray-800" />
          <div className="flex flex-col mb-5 overflow-auto text-sm text-left bg-white rounded-b-lg scrollbar dark:bg-gray-900 h-96 shadow-card">
            <a href="/" className="px-3 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              <div className="mb-1 text-sm leading-5">
                <div className="flex items-center mt-1">
                  <span className="inline-flex items-center w-10 h-10">
                    <img src="https://i.imgur.com/DC0Kp0D.png" alt="" className="object-contain rounded-full opacity-90" draggable="false"/>
                  </span>
                  <div className="flex flex-col w-full ml-2">
                    <span className="text-sm font-medium leading-tight">CraterMaik</span>
                    <span className="text-xs leading-tight opacity-90">@crater</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <footer className="p-4 pb-5 mt-5 text-sm text-left text-gray-600 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-900 shadow-card">
            <div className="flex flex-row flex-wrap mb-5 whitespace-no-wrap">
              <a href="/" className="block w-1/2 px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-gray-800">
                 Home
              </a>
              <a href="/" className="block w-1/2 px-2 py-1 rounded hover:bg-indigo-100 dark:hover:bg-gray-800">
                Guias
              </a>
            </div>
            <p className="px-2">2021 - portalmybot </p>
          </footer>

      </div>
    </div>
  )
}