import React from "react";
import { Measurement } from "../hooks/useHealthService";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const MeasurementsCard = ({ data }: { data: Measurement[] }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Date & Time</Th>
            <Th>Heart Rate (bpm)</Th>
            <Th>Blood Presssure (mmHg)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(({ datetime, heartRate, systolic, diastolic }) => (
            <Tr>
              <Td>
                {datetime.toLocaleString("en-US", {
                  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                })}
              </Td>
              <Td>{heartRate}</Td>
              <Td>{`${systolic}/${diastolic}`}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default MeasurementsCard;
