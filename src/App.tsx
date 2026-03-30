import "../src/scss/App.scss";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/feeders" element={<FeedersPage />} />
          <Route path="/feeders/feeder/:id" element={<CurrentFeederPage />} />
          <Route path="/shelters" element={<SheltersPage />} />
          <Route
            path="/shelters/shelter/:id"
            element={<CurrentShelterPage />}
          />
          <Route path="/map" element={<MapPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
