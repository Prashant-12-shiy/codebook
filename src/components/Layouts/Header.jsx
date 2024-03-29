import { useEffect, useState } from "react"
import Logo from "../../assets/logo.png"
import { Search } from "../Sections/Search";
export const Header = () => {

  const [darkMode, setDarkMode] = useState(true);
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    if(darkMode) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
  }, [darkMode]);

    return (
      <header>      
          <nav className="bg-white dark:bg-gray-900">
              <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                  <a href="/" className="flex items-center">
                      <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                  </a>
                  <div className="flex items-center relative">
                      <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                      <span onClick={() => setShowSearch(!showSearch)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                      <a href="/cart" className="text-gray-700 dark:text-white mr-5">
                      <span className="text-2xl bi bi-cart-fill relative">
                          <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                      </span>                    
                      </a>
                      <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                  </div>
              </div>
          </nav>
          {showSearch &&  <Search setShowSearch={setShowSearch}/>}
      </header>
    )
  }