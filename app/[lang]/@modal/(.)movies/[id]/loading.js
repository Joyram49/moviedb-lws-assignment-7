import MovieModal from "@/app/[lang]/components/Modal";
import Banner from "@/app/ui/common/Banner";
import CardHorizontal from "@/app/ui/common/CardHorizontal";

export default function MovieModalLoader() {
  return (
    <MovieModal>
      <main className='custom-height'>
        <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
          {/* <!-- Sidebar --> */}
          <section>
            <div>
              <Banner />
            </div>

            <CardHorizontal />
          </section>
        </div>
      </main>
    </MovieModal>
  );
}
