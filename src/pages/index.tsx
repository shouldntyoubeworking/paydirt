import Layout from "@/components/layout/";

export default function Home() {
  return (
    <Layout url="home">
        <div className="page home">
           <div className="home-container">
           <h2>Paydirt</h2>
            <p>
                A small college football Elo based ranking project. Check the current top 25 according to this metric, how your team fares{/* , and the methodology of this project*/}
            </p>
           </div>
        </div>
    </Layout>
  );
}
