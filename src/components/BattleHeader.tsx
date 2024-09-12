function BattleHeader() {
  return (
    <div className=" w-full flex flex-row items-center h-16  justify-between px-3 fixed top-0 z-50 pt-3">
      <div className="text-3xl w-auto text-white tracking-widest  flex flex-row items-center justify-center bg-gray-950 p-3 rounded-xl">
        TEAM ALPHA
      </div>
      <div className="text-5xl text-white tracking-widest">BATTLE FINISHED</div>
      <div className="text-3xl text-white tracking-widest w-auto flex flex-row items-center justify-center bg-gray-950 p-3 rounded-xl">
        TEAM BRAVO
      </div>
    </div>
  );
}

export default BattleHeader;
