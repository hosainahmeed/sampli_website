function ButtonsSecondary({ btnText }) {
  return (
    <div>
      <button className="bg-white font-semibold capitalize hover:scale-[102%] cursor-pointer transtion-all bg-transparent px-6 py-2 text-base rounded-md border-[var(--bg-blue-btn)] text-[var(--bg-blue-btn)]">
        {btnText}
      </button>
    </div>
  );
}

export default ButtonsSecondary;
