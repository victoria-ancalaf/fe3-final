import Card from "../Components/Card";
import { useDentistStates } from "../Components/utils/Context";

const Home = () => {
  const {
    state: { dentists },
    state,
  } = useDentistStates();
  console.log(dentists);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
