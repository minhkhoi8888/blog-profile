import "./Edit.scss";
import { useState } from "react"; 
import Input from "../InputFields/Input";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../redux/userSlice";

const Edit = ({ setEdit }) => {
    const userInfo = useSelector((state) => state.user);
    const [name, setName] = useState(userInfo.name);
    const [username, setUsername] = useState(userInfo.userName);
    const [bio, setBio] = useState(userInfo.bio);
    const [url, setUrl] = useState(userInfo.avaUrl);
    const dispatch = useDispatch();
    const avatarArr = [
        "https://cdn.allfamous.org/people/avatars/eva-elfie-e1v7-1630813298664-allfamous.org.jpg",
        "https://i1.sndcdn.com/artworks-000243218324-k1z19a-t500x500.jpg",
        "https://i.pinimg.com/originals/85/42/eb/8542eb4366f5893fb0d3250913781b4f.jpg",
        "https://newsmd2fr.keeng.net/tiin/archive/imageslead/2022/03/29/90_3289e976177c1b19264383cf21b598bf.jpg",
        "https://static2.porn-images-xxx.com/upload/20170430/392/401099/p=305/2.jpg",
        "https://faws.xcity.jp/actress/large/image/person/thumb_1646104401.jpg"
    ]

    const handleSubmit = (e)=>{
        e.preventDefault();
        setEdit(false);
        const updateUser = {
            name: name,
            userName: username,
            bio: bio,
            avaUrl: url,
        }
        dispatch(update(updateUser));
    }
    return ( 
    <>
        <form onSubmit={handleSubmit}>
            <div className="edit">
                <h3>Enter your infomation</h3>
                <div className="edit__input">
                    <Input label="Display name:" inputType="text" placeHoder={name} setData={setName}/>
                    <Input label="Username:" inputType="text" placeHoder={username} setData={setUsername}/>
                    <Input label="Bio:" inputType="textarea" placeHoder={bio} setData={setBio}/>
                </div>

                <h3>Chose your avatar</h3>
                <div className="edit__avatar">
                    {avatarArr.map((item, index)=>(
                        <div key={index} >
                        <img 
                            src={item} 
                            alt="avatar"
                            onClick = {(e) => setUrl(e.target.src)}
                        ></img>
                        </div>
                    ))} 
                </div>
                <button className="edit__save">Save</button>
            </div>
        </form>
    </> 
    );
}
 
export default Edit;