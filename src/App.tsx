import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { ProgressCard } from "./components/ProgressCard";
import { HabitList } from "./components/HabitList";
import { FAB } from "./components/FAB";

function App() {
  return (
    <Layout>
      <Header />
      <main className="flex flex-col px-4 gap-6">
        <ProgressCard />
        <HabitList />
      </main>
      <FAB />
    </Layout>
  );
}

export default App;
