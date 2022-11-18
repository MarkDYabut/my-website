//https://codepen.io/shasa2308/pen/rNVZbzd
import React from "react";
import * as emojisStyles from "./emojis.module.css";

const Emojis = () => {

    const emojis = ['🥾','🎓','🧳','🥊','🏂','🚵','🛴','🚐','📷','🔨'];

    return (
        <>
            <div className={emojisStyles.test}>
                {emojis.map((element) => 
                    <div className={emojisStyles.emoji}>
                    {element}
                    </div>
                )}
            </div>
        </>
    )
}

export default Emojis;