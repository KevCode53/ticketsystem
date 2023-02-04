import Layout from "@/containers/Layout";
import TicketList from "@/containers/TicketList";

const home = () => {
  return (
    <Layout>
      <main>
        <h1>Tickets</h1>
        <TicketList/>
      </main>
    </Layout>
  );
}

export default home;Layout