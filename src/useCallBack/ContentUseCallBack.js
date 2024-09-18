import React, {memo} from "react";

function ContentUseCallBack({onIncrease}) {
    return (
        <div>
            <p>ContentUseCallBack</p>
            <button onClick={onIncrease}>Increase</button>
        </div>
    )
}
export default memo(ContentUseCallBack)