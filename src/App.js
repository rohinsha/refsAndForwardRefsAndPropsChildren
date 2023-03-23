import { useRef, forwardRef } from "react";
import MyChild3 from "./MyChild3";
export function App() {
  const inputRef = useRef(null);
  const inputRefForChild1 = useRef(null);
  const inputRefForChild3 = useRef(null);
  const handleInputChange = () => {
    inputRef.current.style.backgroundColor = "green";
    inputRef.current.style.color = "white";
    inputRef.current.value = "rohu";
  };
  const handleInputChangeChild1 = () => {
    inputRefForChild1.current.style.backgroundColor = "black";
    inputRefForChild1.current.style.color = "white";
    inputRefForChild1.current.value = "gajbhiye";
  };

  //when input is in child and button is in ur parent, u should send a reference from parent to child.
  const handleInputChangeChild3 = () => {
    inputRefForChild3.current.style.backgroundColor = "black";
    inputRefForChild3.current.style.color = "white";
    inputRefForChild3.current.value = "value from forwardRef";
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          marginBottom: "20px"
        }}
      >
        hi i m the parent of child1 and child2. and child2 has it's own children
        too.
      </div>
      <div style={{ margin: "20px" }}>
        <input type="text" name="name" ref={inputRef} />
        <button onClick={handleInputChange}>Change Styles</button>
        <br></br>
      </div>
      <Mychild1 ref={inputRefForChild1} />
      <button onClick={handleInputChangeChild1}>
        Change input from child1
      </button>
      <Mychild2>
        <h1>hi all, I m child2 content residing inside child2 now.</h1>
      </Mychild2>
      <MyChild3 ref={inputRefForChild3} />
      <button onClick={handleInputChangeChild3}>
        Change input from child3
      </button>
    </>
  );
}
const Mychild1 = forwardRef((props, ref) => {
  return (
    <>
      <input type="text" name="name" ref={ref} />
    </>
  );
});

const Mychild2 = (props) => {
  return <>{props.children}</>;
};
