import React from "react";
import AmazonLogo from "../assets/Amazon-logo.png";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <header>
      <main>
        <div>
          <img className=" w-40" src={AmazonLogo} alt="Amazon-logo" />
        </div>
        <div className="flex">
          <div>
            <select>
              <option value="All">All</option>
              <option value="Books">Books</option>
              <option value="Movies">Movies</option>
              <option value="Series">Series</option>
              <option value="Sport">Sport</option>
              <option value="Music">Music</option>
              <option value="Gaming">Gaming</option>
            </select>
          </div>
          <div>
            <input type="text" name="search" placeholder="Search" />
          </div>
          <div>
            <button>
              <SearchIcon/>
            </button>
          </div>
        </div>
      </main>
    </header>
  );
}

export default Header;
