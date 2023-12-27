import Body from "./Body";
import Header from "./Header";

function Container() {
  return (
    <div className=" h-[auto] w-3/5 flex flex-col justify-center items-center border-2 " >
      <Header />
      <Body />
    </div>
  );
}

export default Container;
