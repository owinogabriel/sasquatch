function Header() {
  return (
    <div className="flex flex-row ml-[24.5rem] mt-24 justify-between items-center bg-background rounded-xl p-2 w-[40%]">
      
      <div>
        <p className="text-white font-light">My balance</p>
        <h2 className="text-white text-2xl font-semibold">$921.48</h2>
      </div>
      
      <div className="w-[45px] aspect-square rounded-[50%] bg-black relative before:absolute before:bg-transparent before:border-solid before:border-white before:border-2 before:rounded-[50%] before:w-full before:aspect-square before:right-6 before:top-0"></div>
    </div>
  );
}

export default Header;