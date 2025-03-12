function ButtonsPrimary({ btnText }) {
  return (
    <div>
      <button className="border-2 font-semibold capitalize hover:scale-[102%] cursor-pointer transtion-all border-[#5c96ee] px-6 py-2 text-base rounded-md bg-[var(--bg-blue-btn)] text-white">
        {btnText}
      </button>
    </div>
  );
}

export default ButtonsPrimary;
