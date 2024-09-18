import React, {useCallback, useState} from "react";
import ContentUseCallBack from "./ContentUseCallBack";

function ExUseCallback() {
    const [count, setCount] = useState(0)
    const handleIncrease = useCallback(() => {
        setCount(count => count + 1)
    }, [count])
    return (
        <div>
            <p>ExUseCallback</p>
            <ContentUseCallBack onIncrease={handleIncrease}/>
            <p>Count: {count}</p>
        </div>
    )
}
export default ExUseCallback