import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineExpand } from "react-icons/ai";
import { FaRegShareSquare, FaRegComment } from "react-icons/fa";



function Home() {
    return (
        <div>
            <div className="pages">
                <Navigation />
                <div className="menu-container">
                    <Sidebar />
                    <div className="menus">
                        {/* {foodArr.map((food, i) => ( */}
                        {/* <Link to={`/menu/${food.category}/${food.id}`} className="menu" key={i}> */}
                        <div className="title">
                            <h1>All Pages</h1>
                        </div>
                        <div className="options">
                            <div className="left-option">
                                <p>Sort by: <span><select name="" id=""><option value="hot">hot</option><option value="new">new</option></select></span></p>
                                <p>Include: <span><select name="" id=""><option value="communities & individuals">communities & individuals</option><option value="new">new</option></select></span></p>
                            </div>
                            <p>Layout: <span><select name="" id=""><option value="hot">hot</option><option value="new">new</option></select></span></p>
                        </div>
                        <div className="post-section">
                            <div className="post-details">
                                <div className="individual">
                                    <ul className="user">
                                        <li className="profile-photo">C</li>
                                        <li className="user-details">
                                            <li>CaptainAction <span>- 5 hr ago</span></li>
                                            <li>@CaptainAction</li>
                                        </li>
                                    </ul>
                                    <ul className="follow-user">
                                        <li className=''>
                                            <button className="follow"><Link>follow</Link></button>
                                        </li>
                                        <li className=''>
                                            <Link><button className="hide"><Link>hide</Link></button></Link>
                                        </li>
                                        <li>
                                            <Link className="user-menu"><CiMenuKebab /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-body">
                                    <div className="user-post-header">
                                        <h4>What was the most badass weapon ever used?</h4>
                                    </div>
                                    <div className="user-post">
                                        <p>i love coding and winning</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, repudiandae. Quasi magnam et repudiandae voluptas? Placeat cupiditate tempora praesentium est inventore obcaecati nobis quidem id distinctio, accusamus qui, quos iure.</p>
                                    </div>
                                </div>
                                <div className="actions">
                                    <div>
                                        <Link to="" className='action-link'><IoHeartOutline className='like-icon' />
                                            <span className='like'>1</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegComment className='like-icon' />
                                            <span className='like'>19</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><AiOutlineExpand className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegShareSquare className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-section">
                                <div className="likes">
                                    <p>Sort by: <span><select name="Sort by:" id="">
                                        <option value="likes">likes</option>
                                    </select>
                                    </span></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab eum aspernatur voluptates a tempore, nulla fugiat doloremque expedita deserunt repellendus quae qui sapiente dolorem autem. Accusamus eaque delectus aliquam.</p>
                            </div>
                        </div>
                        <div className="post-section">
                            <div className="post-details">
                                <div className="individual">
                                    <ul className="user">
                                        <li className="profile-photo">C</li>
                                        <li className="user-details">
                                            <li>CaptainAction <span>- 5 hr ago</span></li>
                                            <li>@CaptainAction</li>
                                        </li>
                                    </ul>
                                    <ul className="follow-user">
                                        <li className=''>
                                            <button className="follow"><Link>follow</Link></button>
                                        </li>
                                        <li className=''>
                                            <Link><button className="hide"><Link>hide</Link></button></Link>
                                        </li>
                                        <li>
                                            <Link className="user-menu"><CiMenuKebab /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-body">
                                    <div className="user-post-header">
                                        <h4>What was the most badass weapon ever used?</h4>
                                    </div>
                                    <div className="user-post">
                                        <p>i love coding and winning</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, repudiandae. Quasi magnam et repudiandae voluptas? Placeat cupiditate tempora praesentium est inventore obcaecati nobis quidem id distinctio, accusamus qui, quos iure.</p>
                                    </div>
                                </div>
                                <div className="actions">
                                    <div>
                                        <Link to="" className='action-link'><IoHeartOutline className='like-icon' />
                                            <span className='like'>1</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegComment className='like-icon' />
                                            <span className='like'>19</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><AiOutlineExpand className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegShareSquare className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-section">
                                <div className="likes">
                                    <p>Sort by: <span><select name="Sort by:" id="">
                                        <option value="likes">likes</option>
                                    </select>
                                    </span></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab eum aspernatur voluptates a tempore, nulla fugiat doloremque expedita deserunt repellendus quae qui sapiente dolorem autem. Accusamus eaque delectus aliquam.</p>
                            </div>
                        </div>
                        <div className="post-section">
                            <div className="post-details">
                                <div className="individual">
                                    <ul className="user">
                                        <li className="profile-photo">C</li>
                                        <li className="user-details">
                                            <li>CaptainAction <span>- 5 hr ago</span></li>
                                            <li>@CaptainAction</li>
                                        </li>
                                    </ul>
                                    <ul className="follow-user">
                                        <li className=''>
                                            <button className="follow"><Link>follow</Link></button>
                                        </li>
                                        <li className=''>
                                            <Link><button className="hide"><Link>hide</Link></button></Link>
                                        </li>
                                        <li>
                                            <Link className="user-menu"><CiMenuKebab /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-body">
                                    <div className="user-post-header">
                                        <h4>What was the most badass weapon ever used?</h4>
                                    </div>
                                    <div className="user-post">
                                        <p>i love coding and winning</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, repudiandae. Quasi magnam et repudiandae voluptas? Placeat cupiditate tempora praesentium est inventore obcaecati nobis quidem id distinctio, accusamus qui, quos iure.</p>
                                    </div>
                                </div>
                                <div className="actions">
                                    <div>
                                        <Link to="" className='action-link'><IoHeartOutline className='like-icon' />
                                            <span className='like'>1</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegComment className='like-icon' />
                                            <span className='like'>19</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><AiOutlineExpand className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegShareSquare className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-section">
                                <div className="likes">
                                    <p>Sort by: <span><select name="Sort by:" id="">
                                        <option value="likes">likes</option>
                                    </select>
                                    </span></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab eum aspernatur voluptates a tempore, nulla fugiat doloremque expedita deserunt repellendus quae qui sapiente dolorem autem. Accusamus eaque delectus aliquam.</p>
                            </div>
                        </div>
                        <div className="post-section">
                            <div className="post-details">
                                <div className="individual">
                                    <ul className="user">
                                        <li className="profile-photo">C</li>
                                        <li className="user-details">
                                            <li>CaptainAction <span>- 5 hr ago</span></li>
                                            <li>@CaptainAction</li>
                                        </li>
                                    </ul>
                                    <ul className="follow-user">
                                        <li className=''>
                                            <button className="follow"><Link>follow</Link></button>
                                        </li>
                                        <li className=''>
                                            <Link><button className="hide"><Link>hide</Link></button></Link>
                                        </li>
                                        <li>
                                            <Link className="user-menu"><CiMenuKebab /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-body">
                                    <div className="user-post-header">
                                        <h4>What was the most badass weapon ever used?</h4>
                                    </div>
                                    <div className="user-post">
                                        <p>i love coding and winning</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, repudiandae. Quasi magnam et repudiandae voluptas? Placeat cupiditate tempora praesentium est inventore obcaecati nobis quidem id distinctio, accusamus qui, quos iure.</p>
                                    </div>
                                </div>
                                <div className="actions">
                                    <div>
                                        <Link to="" className='action-link'><IoHeartOutline className='like-icon' />
                                            <span className='like'>1</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegComment className='like-icon' />
                                            <span className='like'>19</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><AiOutlineExpand className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegShareSquare className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-section">
                                <div className="likes">
                                    <p>Sort by: <span><select name="Sort by:" id="">
                                        <option value="likes">likes</option>
                                    </select>
                                    </span></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab eum aspernatur voluptates a tempore, nulla fugiat doloremque expedita deserunt repellendus quae qui sapiente dolorem autem. Accusamus eaque delectus aliquam.</p>
                            </div>
                        </div>
                        <div className="post-section">
                            <div className="post-details">
                                <div className="individual">
                                    <ul className="user">
                                        <li className="profile-photo">C</li>
                                        <li className="user-details">
                                            <li>CaptainAction <span>- 5 hr ago</span></li>
                                            <li>@CaptainAction</li>
                                        </li>
                                    </ul>
                                    <ul className="follow-user">
                                        <li className=''>
                                            <button className="follow"><Link>follow</Link></button>
                                        </li>
                                        <li className=''>
                                            <Link><button className="hide"><Link>hide</Link></button></Link>
                                        </li>
                                        <li>
                                            <Link className="user-menu"><CiMenuKebab /></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="post-body">
                                    <div className="user-post-header">
                                        <h4>What was the most badass weapon ever used?</h4>
                                    </div>
                                    <div className="user-post">
                                        <p>i love coding and winning</p>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, repudiandae. Quasi magnam et repudiandae voluptas? Placeat cupiditate tempora praesentium est inventore obcaecati nobis quidem id distinctio, accusamus qui, quos iure.</p>
                                    </div>
                                </div>
                                <div className="actions">
                                    <div>
                                        <Link to="" className='action-link'><IoHeartOutline className='like-icon' />
                                            <span className='like'>1</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegComment className='like-icon' />
                                            <span className='like'>19</span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><AiOutlineExpand className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="" className='action-link'><FaRegShareSquare className='like-icon' />
                                            <span className='like'></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-section">
                                <div className="likes">
                                    <p>Sort by: <span><select name="Sort by:" id="">
                                        <option value="likes">likes</option>
                                    </select>
                                    </span></p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ab eum aspernatur voluptates a tempore, nulla fugiat doloremque expedita deserunt repellendus quae qui sapiente dolorem autem. Accusamus eaque delectus aliquam.</p>
                            </div>
                        </div>
                        
                        {/* </Link> */}
                        {/* ))} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;