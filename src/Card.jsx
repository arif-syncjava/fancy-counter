import Title from "./Title.jsx";
import ResetButton from "./ResetButton.jsx";
import CounterButtons from "./ButtonContainer.jsx";
import Count from "./Count.jsx";
import {useEffect, useState} from "react";
import CountButton from "./CountButton.jsx";

export default function Card() {
    const [count, setCount] = useState(0);
    const locked = count === 5 ? true : false;

    useEffect(() => {
            const handleKeydown = (event) => {
                if (event.code === 'Space') {
                    const newCount = count + 1
                    if (newCount > 5) {
                        setCount(5)
                        return;
                    } else {
                        setCount(newCount)
                    }
                }

            }


            window.addEventListener("keydown", handleKeydown)
            return () => {
                window.removeEventListener("keydown", handleKeydown)
            }

        }, [count]
    )


    return <div className={`card ${locked} ? "card--limit" : " " `}>
        <Title locked={locked}/>
        <Count count={count}/>
        <ResetButton setCount={setCount}/>
        <CounterButtons>
            <CountButton type="minus" setCount={setCount} locked={locked}/>
            <CountButton type="plus" setCount={setCount} locked={locked}/>
        </CounterButtons>
    </div>
}
