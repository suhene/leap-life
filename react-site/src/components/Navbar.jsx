import SmallLogo from "./smallLogo";
import AdminPanel from "./adminPanel";
import MainButton from "./mainButton";
import SearchIcon from "./searchIcon";
import WriteIcon from "./writeIcon"; 

export default function Navbar(){
    return (

        <div className="d-flex justify-content-between py-2 px-4 slim-nav">
            <div>
                <div className="d-flex">
                    <SmallLogo />
                    <form className="position-relative">
                        <input
                            type="text"
                            className="form-control search-input"
                            placeholder="Search Medium"
                        />
                        <button className="btn search-button">
                            <SearchIcon />
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <ul className="d-flex align-items-center slim-nav-menu">
                    <li>
                        <a href="#" className="slim-nav-link">
                            <WriteIcon />
                            Write
                        </a>
                    </li>
                    <li>
                        <MainButton>Sign up</MainButton>
                    </li>
                    <li>
                        <a href="#" className="slim-nav-link">
                            Sign In
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <AdminPanel />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

