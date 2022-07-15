import { useSelector } from "react-redux";
import "./ListPost.scss";

const ListPost = () => {
    const listPost = useSelector((state)=>state.post.posts);
    const tagPost = ["funny", "game", "technic", "food", "other"];

    return ( 
        <div className="post-container">
            {listPost.slice(1).map((item, index)=>(
                <div className="post-item" key={index}>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                    <p 
                        className={`tag-btn tag-${tagPost[item.tagIndex]}`}
                    >
                        {tagPost[item.tagIndex]}
                    </p>
                </div>
            ))}
            </div>
    );
}
 
export default ListPost;