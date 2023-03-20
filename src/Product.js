import {useState} from "react";

export default function Product({details}) {

    let {name, description, image} = details;
    const [count, setCount] = useState(0);
    const handledCountAdd = ()=>{setCount(count + 1)};
    const handledCountRemove =()=>{count > 0 && setCount(count - 1)};

    return <div className="product">
        <img width="50" alt="" src={image}/>
        <div className="product-info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        <div className="product-buttons">
            <button onClick={handledCountRemove} className="product-sub" disabled={count <= 0}>-</button>
            <h3 className="product-count">{count > 0 && count}</h3>
            <button onClick={handledCountAdd} className="product-add" >+</button>
        </div>
    </div>
}
