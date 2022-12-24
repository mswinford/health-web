import { useCallback, useMemo } from "react";
import useFetch from "./useFetch";

export type Measurement = {
  _id: number;
  userId: string;
  datetime: Date;
  heartRate: number;
  systolic: number;
  diastolic: number;
};

const useHealthService = () => {
  const doFetch = useFetch();

  const getUserMeasurements = useCallback(async () => {
    const result = await doFetch(`/measurements`, { method: "GET" });
    return result.map((r: Measurement) => ({
      ...r,
      datetime: new Date(r.datetime),
    }));
  }, [doFetch]);

  const insertUserMeasurement = useCallback(
    (measurement: Omit<Measurement, "_id" | "userId">) =>
      doFetch("/measurements", {
        method: "POST",
        body: JSON.stringify(measurement),
      }).then(res => res as Measurement),
    [doFetch]
  );

  return useMemo(
    () => ({
      getUserMeasurements,
      insertUserMeasurement,
    }),
    [getUserMeasurements, insertUserMeasurement]
  );
};

export default useHealthService;
