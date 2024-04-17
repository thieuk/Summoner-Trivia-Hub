export default function Loading() {
  return(
    <div className="w-full h-[calc(100vh-66px)] grid place-content-center text-amber-400">
      <div className="flex gap-2">
        <div className="w-7 h-7 grid place-content-center animate-spin border-2 border-amber-400 rounded-full">
          <div className="w-2 border-t-2 border-amber-400 mr-2"></div>
        </div>
        <div>Loading...</div>
      </div>
    </div>
  );
}