export default function MobileNavbar({ state, isBorder }) {
  return (
    <>
      <section className={`flex items-center ${isBorder && "border px-2 rounded"}`}>
        <button aria-label="toggle navigation menu" onClick={state}>
          <span className="w-[30px] h-[2px] my-2 block bg-lightBlue"></span>
          <span className="w-[30px] h-[2px] my-2 block bg-lightBlue"></span>
          <span className="w-[30px] h-[2px] my-2 block bg-lightBlue"></span>
        </button>
      </section>
    </>
  );
}
