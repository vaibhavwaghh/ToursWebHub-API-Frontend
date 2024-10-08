import Overview from "./Overview";

const OverviewList = ({ allTours }) => {
  console.log("OVERVIEW LIST", allTours);

  return (
    <>
      <main className="main">
        <div className="card-container">
          {allTours?.map((tour) => (
            <Overview key={tour._id} tour={tour} />
          ))}
        </div>
      </main>
    </>
  );
};

export default OverviewList;
