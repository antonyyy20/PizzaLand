import Image from "next/image";

export interface Section {
	categoria: string;
  link1: string;
  link2: string;
  link3: string;
}

export default function Section({categoria, link1, link2, link3}: Section) {
    return (
      <section>
        <p className="text-md fond-bold">{categoria}</p>
        <div className="grid grid-cols-3 gap-4">
          <Image
              src= {link1}
              alt="Pepperoni"
              width={100}
              height={100}
              className="w-full h-full object-cover bg-gray-200"
          />
          <Image
              src= {link2}
              alt="Pepperoni"
              width={100}
              height={100}
              className="w-full h-full object-cover bg-gray-200"
          />
          <Image
              src= {link3}
              alt="Pepperoni"
              width={100}
              height={100}
              className="w-full h-full object-cover bg-gray-200"
          />
        </div>
      </section>
    );
  }