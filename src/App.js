import { useRef, forwardRef } from "react";
export function App() {
  const inputRef = useRef(null);
  const inputRefForChild1 = useRef(null);
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
