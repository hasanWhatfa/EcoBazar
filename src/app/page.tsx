import Heading from "@/components/shared/Typograpgy/Heading";
import DropDownMenu from "@/components/ui/DropDownMenu";


export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Heading level={1} size="h72" weight="semibold">hello world</Heading>
      <DropDownMenu title="dropDown Title" options={[{linkText:"Fresh Fruit", linkTo:"/option1",icon:''}, {linkText:"Option 2", linkTo:"/option2",icon:''}]}/>
    </div>
  );
}
