import DropDownMenu from "@/components/ui/DropDownMenu";


export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1>hello world</h1>
      <DropDownMenu title="dropDown Title" options={[{linkText:"Fresh Fruit", linkTo:"/option1",icon:''}, {linkText:"Option 2", linkTo:"/option2",icon:''}]}/>
    </div>
  );
}
