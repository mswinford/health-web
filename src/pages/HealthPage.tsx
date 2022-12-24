import React, { useEffect, useState } from "react";
import { Card, CardBody, Container } from "@chakra-ui/react";
import HeartHealthChart from "../components/HeartHealthChart";
import Layout from "../components/Layout";
import useHealthService, { Measurement } from "../hooks/useHealthService";
import MeasurementsCard from "../components/MeasurementsCard";
import MeasurementForm from "../components/MeasurementForm";

const HealthPage = () => {
  const { getUserMeasurements } = useHealthService();
  const [measurements, setMeasurements] = useState<Measurement[]>([]);

  useEffect(() => {
    getUserMeasurements().then(setMeasurements);
  }, [getUserMeasurements]);

  return (
    <Layout title="Health">
      <Container maxWidth="container.xl">
        <Card height={400} bgColor="white">
          <CardBody>
            <HeartHealthChart data={measurements} />
          </CardBody>
        </Card>
      </Container>
      <Container maxWidth="container.xl">
        <Card bgColor="white">
          <CardBody>
            <MeasurementForm />
          </CardBody>
        </Card>
      </Container>
      <Container maxWidth="container.xl">
        <Card bgColor="white">
          <CardBody>
            <MeasurementsCard data={measurements} />
          </CardBody>
        </Card>
      </Container>
    </Layout>
  );
};

export default HealthPage;
