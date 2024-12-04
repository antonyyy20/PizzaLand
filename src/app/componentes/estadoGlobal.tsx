'use client'
import { useState } from "react";

export default function useContador() {
    const [count, setCount] = useState(0);

    setCount((prevCount) => prevCount + 1);

  return(
    alert(count)
  );
  }