import React from "react";
import Profile from "@pages/profile";
// import Decorator from "@pages/decorator";
// import RenderImg from "@pages/renderImg";
import style from "./app.less";
function App(props) {
    return (
        <div className={style.app}>
            <Profile/>
            {/*<Decorator*/}
            {/*    x={222322}*/}
            {/*    y={3}*/}
            {/*/>*/}
            {/*<RenderImg/>*/}
        </div>
    );
}

export default App
