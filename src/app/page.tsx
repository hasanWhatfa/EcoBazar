import Heading from "@/components/shared/Typograpgy/Heading";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Heading level={1} size="h72" weight="semibold">hello world</Heading>
    </div>
  );
}
