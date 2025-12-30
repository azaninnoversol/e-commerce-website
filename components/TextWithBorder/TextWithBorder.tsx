import React from "react";

function TextWithBorder({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-10 bg-[#DB4444] rounded-sm" />
      <h2 className="text-[#DB4444] font-bold text-lg">{text}</h2>
    </div>
  );
}

export default React.memo(TextWithBorder);
