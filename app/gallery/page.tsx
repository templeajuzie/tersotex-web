import Footer from "@/components/Footer";
import GallerySnippet from "@/components/Gallery";
import Header from "@/components/Header";

const Gallery = () => {
  return (
    <div>
      <Header />
      <main className="py-12">
        <GallerySnippet />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
