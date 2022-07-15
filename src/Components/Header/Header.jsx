import bgHeader from "../../asset/bg-header.jpg";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header = (props) => {
    const setEdit = props.setEdit;
    const userInfo = useSelector((state)=>state.user)
    return ( 
        <div className="header" >
            <img className="header__bg" src={bgHeader} alt="" />
            <div className="header__info">
                <img className="avatar" src={userInfo.avaUrl} alt="" />
                <div onClick={()=>{setEdit(true)}} className="edit">Edit Profile</div>
                <div className="name">{userInfo.name} <span className="username">{userInfo.userName}</span></div>
                <div className="bio">{userInfo.bio}</div>
            </div>
        </div>
    );
}
 
export default Header;