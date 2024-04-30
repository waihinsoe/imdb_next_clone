import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center mt-1">
      <Image width={208} height={208} src="spinner.svg" alt="loading..." />
    </div>
  );
}
