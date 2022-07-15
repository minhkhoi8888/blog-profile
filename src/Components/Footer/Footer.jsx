import Input from "../InputFields/Input";
import "./Footer.scss";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { create } from "../../redux/postSlice";

const Footer = ( { setOpen, isOpen }) => {
    const tagPost = ["funny", "game", "technic", "food", "other"];
    const [indexPost, setIndexPost] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();
    const handlePost = (event)=>{
        event.preventDefault();
        setOpen(false);
        const newPost = {
            title: title,
            content: content,
            tagIndex: indexPost,
        }
        dispatch(create(newPost));
        setTitle("");
        setContent("");
    }
    
    return ( 
        <>
            <div 
                className={`make-post${isOpen ? ' active' : ""}`}
            >
                <div className="make-post__header">
                    <i onClick={()=>setOpen(!isOpen)} className={isOpen ? "bi bi-x-circle-fill" : "bi bi-plus-circle-fill"}></i>
                    <div 
                        className="post-news"
                        onClick={handlePost}
                    >
                        POST
                    </div>
                </div>

                <div className="make-post__content">
                    <Input label="Title" inputType="text" data={title} setData={setTitle} placeHoder="Add title" />
                    <Input label="Content" inputType="textarea" data={content} setData={setContent} placeHoder="Add title" />
                    <p className="tag-post-header">Tag Post</p>
                    <div className="tag-post">
                        {tagPost.map((item, index)=>(
                            <p 
                                className={`tag-btn tag-${item} ${indexPost === index ? "tag-selected": ""}`} 
                                key={index}
                                onClick={()=>setIndexPost(index)}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

        </>
     );
}
 
export default Footer;