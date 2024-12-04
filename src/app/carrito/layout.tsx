import React from "react";
import Navigation from "../componentes/navigation";
import Header from "../componentes/header";
export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>
      <Header></Header>
        {children}
      <Navigation></Navigation>
        </main>
    </div>
  );
}