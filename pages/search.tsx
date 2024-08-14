import React, { useState } from "react";
import SearchBar from "../src/Components/SearchBar";
import HospitalList from "../src/Components/HospitalList";
import ProtectedRoute from "../src/Components/ProtectedRoute";
import { fetchHospitals } from "@/Utilities/mapApi";
import { Hospital } from "@/types";

const SearchPage: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchHospitals(query);
      setHospitals(data);
    } catch (err) {
      setError("Failed to fetch hospitals");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div>
        <h1>Search for Hospitals</h1>
        <SearchBar onSearch={handleSearch} />
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <HospitalList hospitals={hospitals} />
      </div>
    </ProtectedRoute>
  );
};

export default SearchPage;
