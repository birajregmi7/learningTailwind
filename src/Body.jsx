function Body() {
  return (
    <div className="flex flex-wrap flex-col justify-center items-center  text-center gap-2 ">
      <h4 className="font-bold text-xl">Stay up to data with the Latest!</h4>
      <h6 className="font-medium text-lg ">
        Subscribe to our newsletter for the latest news straight into your inbox
      </h6>
      <input type="text" placeholder="you@exapmple.com" className="text-center rounded-md bg-slate-200 py-3 w-[45%]" />
      <button className=" bg-blue-500 text-white py-3 rounded-full  w-[45%]">Subscribe Now</button>
      <p className="">We value your privacy</p>
    </div>
  );
}

export default Body;
