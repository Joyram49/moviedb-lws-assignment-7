import Banner from "@/app/ui/common/Banner";
import CardHorizontal from "@/app/ui/common/CardHorizontal";
import Sidebar from "@/app/ui/common/Sidebar";

export default function MovieLoader() {
  return (
    <main className='custom-height'>
      <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
        {/* <!-- Sidebar --> */}
        <Sidebar />
        <section>
          <div>
            <Banner />
          </div>

          <CardHorizontal />
        </section>
      </div>
    </main>
  );
}
