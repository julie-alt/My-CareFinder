import React from "react";
import { exportToCSV } from "@/Utilities/exportCSV";
import { Hospital } from "@/types";
import { Button } from "@chakra-ui/react";

interface ShareButtonProps {
  data: Hospital[];
}

const ShareButton: React.FC<ShareButtonProps> = ({ data }) => {
  const handleShare = async () => {
    const csvData = data.map((hospital: Hospital) => [
      hospital.name,
      hospital.address,
    ]);
    const downloadURL = await exportToCSV(csvData);

    if (navigator.share) {
      navigator
        .share({
          title: "Hospital List",
          url: downloadURL,
        })
        .catch(console.error);
    } else {
      const mailtoLink = `mailto:?subject=Hospital List&body=Here is the list of hospitals: ${downloadURL}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <Button variant="outline" onClick={handleShare}>
      Share CSV
    </Button>
  );
};

export default ShareButton;
