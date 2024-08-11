// src/Components/ExportButton.tsx
import React from 'react';
import { exportToCSV } from '@/Utilities/exportCSV';
import { Hospital } from '@/types';
import { Button } from '@chakra-ui/react';

interface ExportButtonProps {
  data: Hospital[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
  const handleExport = async () => {
    try {
      const csvData = data.map((hospital: Hospital) => [
        hospital.name,
        hospital.address,
        hospital.email || '',
        hospital.phone_number || '',
      ]);
      const downloadURL = await exportToCSV(csvData);
      window.open(downloadURL, '_blank');
    } catch (error) {
      console.error('Error exporting the CSV:', error);
    }
  };

  return (
    <Button colorScheme="gray" onClick={handleExport}>
      Export to CSV
    </Button>
  );
};

export default ExportButton;
