import Header from "@/components/header/";
import Footer from "@/components/footer/";
import "@/App.css"
export default function Layout({ children, url }) {
  return (
    <div className="layout">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
