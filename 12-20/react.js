import React from 'react';

const root = document.getElementById("root");


function App() {
    const [count, setCount] = React.useState(100);
    const countUp = () => { setCount((current) => current + 1) };
    const countDown = () => { setCount((current) => current - 1) };

    return (
        <div>
            <h3>Total Count : {count}</h3>
            <button onClick={countUp}>count up</button>
            <button onClick={countDown}>count down</button>
        </div>
    );
}

// 컴포넌트의 첫 글자는 반드시 대문자여야한다.
const Title = () => (
    <h3 id="title" onMouseEnter={() => console.log("enter")}
        onMouseLeave={() => console.log("leave")}>
        Num Count : {number}
    </h3>
);

const Button = () => (
    <button
        style={{ background: "red" }}

        onClick={() => console.log("clicked")}
    >
        btn
    </button>
);


let number = 0;

const CountText = () => (
    <h3 id="txt-count">Num Count : 0</h3>
)
const Contents = () => (
    <div class="contents">
        <h2> Container - contents </h2>
        <div>
            <h3 id="txt-count">Num Count : 0</h3>
            <button id="btn-count"
                onClick={() => {
                    document.getElementById("txt-count").innerText = "Num Count : " + (++number);
                    ReactDOM.render(<Container />, root);
                }}>Count up
            </button>
        </div>
    </div>
);

const Container = () => (
    <div>
        <Title />
        <Button />
        <Contents />
        <App />
    </div>
);
ReactDOM.render(<Container />, root);