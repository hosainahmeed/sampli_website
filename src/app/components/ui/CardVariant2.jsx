import React from "react";
import ButtonsSecondary from "./ButtonsSecondary";

function CardVariant2({
  text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odit doloribus aperiam delectus cumque odio est maiores nobis minus nulla?`,
  title = "Unlock your Business Potential with sampli",
  gradient_color = "!bg-[var(--bg-blue-btn)]",
  btnText = "Register",
}) {
  return (
    <div
      className={`w-full p-8 rounded-3xl ${gradient_color} border-[1px] border-[#e52e2e] bg-white`}
    >
      <div className="area-sm text-center flex-center-center flex-col gap-4">
        <h1 className="text-2xl text-white font-semibold capitalize">
          {title}
        </h1>
        <p className="text-base text-white">{text}</p>
        <ButtonsSecondary btnText={btnText} />
      </div>
    </div>
  );
}

export default CardVariant2;
