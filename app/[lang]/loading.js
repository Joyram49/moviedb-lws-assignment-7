import Card from "../ui/common/Card";
import Sidebar from "../ui/common/Sidebar";

export default function HomeLoader() {
  return (
    <main>
      <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
        <Sidebar />
        <div className='content'>
          <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-7'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
}
