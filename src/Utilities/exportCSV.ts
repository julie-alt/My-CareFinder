import { uploadCSVToFirebase } from "./uploadCSV";

export const exportToCSV = async (data: any[]): Promise<string> => {
  const csvContent = data.map((row) => row.join(",")).join("\n");
  const downloadURL = await uploadCSVToFirebase(csvContent);
  return downloadURL;
};
