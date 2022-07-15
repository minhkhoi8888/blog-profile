import "./Input.scss";

const Input = ({ inputType, data, setData, label, placeHoder }) => {
    return ( 
    <div className="input">
        <label>{label}</label>
        {inputType === "text" ? (
            <input 
                type="text" 
                placeholder={placeHoder} 
                value={data}
                onChange={(e)=>setData(e.target.value)}
            />
        ) : (
            <textarea 
                type="text" 
                placeholder={placeHoder}
                value={data}
                onChange={(e)=>setData(e.target.value)}
            />
        )}
    </div> 
    );
}
 
export default Input;