import React from "react";
// import {hot} from "react-hot-loader/root";
import style from "./index.less";
import img from "@assets/1.png";
import {print, sum} from "./util";


function RenderImg(props) {
    return (
        <div className={style.img}>
            <img src={img} alt=""/>
            <div onClick={print}>
                点击
            </div>
            <div>
                {
                    sum(2, 6)
                }
            </div>
        </div>
    );
}

// if (module.hot) {
//     module.hot.accept("./util.js", function() {
//         console.log("Accepting the updated printMe module!");
//         print();
//     });
// }


// export default hot(RenderImg);
export default RenderImg
