import React from "react";
import { Hospital } from "@/types";
interface HospitalListProps {
  hospitals: Hospital[];
}

interface HospitalListProps {
  hospitals: Hospital[];
}

const HospitalList: React.FC<HospitalListProps> = ({ hospitals }) => {
  return (
    <div>
      {hospitals.length === 0 ? (
        <p>No hospitals found.</p>
      ) : (
        <ul>
          {hospitals.map((hospital) => (
            <li key={hospital.id}>
              <h3>{hospital.name}</h3>
              <p>
                {hospital.address},{hospital.phone_number},{hospital.email},
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HospitalList;
