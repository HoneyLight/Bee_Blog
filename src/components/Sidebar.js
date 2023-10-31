import { Link } from "react-router-dom";
import { FaHouse, FaPerson, FaPeopleGroup, FaQuestion, FaFileContract } from "react-icons/fa6";
import { HiChatAlt2 } from "react-icons/hi";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="side-tabs">
                {/* {foodCatArr.map((category, i) => ( */}
                <ul>
                    <Link><li className="tabs-link">A</li></Link>
                    <Link><li>All</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link"><FaHouse /></li></Link>
                    <Link><li>Home</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link"><FaPerson /></li></Link>
                    <Link><li>People</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link"><FaPeopleGroup /></li></Link>
                    <Link><li>Communities</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link"><HiChatAlt2 /></li></Link>
                    <Link><li>Squabblr Chat</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link"><HiChatAlt2 /></li></Link>
                    <Link><li>Active Chats</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link">A</li></Link>
                    <Link><li>About</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link"><FaQuestion /></li></Link>
                    <Link><li>FAQ</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link"><FaFileContract className="contract" /></li></Link>
                    <Link><li>Terms</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link"><FaFileContract /></li></Link>
                    <Link><li>Privacy</li></Link>
                </ul>
                <ul>
                    <Link><li className="tabs-link"><FaFileContract /></li></Link>
                    <Link><li>Media</li></Link>
                </ul>
                {/* ))} */}

            </div>
            <div className="chatfeed">
                <p>Chat feed</p>
                <p className="meta">
                    <Link>
                        <p>/s/SquabblrMeta</p>
                        <p>Last message 2 hours ago</p>
                    </Link>
                </p>
                <div className="twitch">
                    <Link>
                        <p>/s/Twitch</p>
                        <p>Last message 5 hours ago</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;