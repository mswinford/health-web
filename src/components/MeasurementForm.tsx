import React, { useEffect } from "react";
import { ValidationRule, useForm } from "react-hook-form";
import useHealthService from "../hooks/useHealthService";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { getUTCDateFromDateAndTimeStrings } from "../utils/date-utils";

type FormValues = {
  date: string;
  time: string;
  heartRate: number;
  systolic: number;
  diastolic: number;
};

const numericValidationRule = {
  required: true,
  valueAsNumber: true,
  min: {
    value: 40,
    message: "Min value is 40",
  },
  max: {
    value: 200,
    message: "Max value is 200",
  },
};

const MeasurementForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>();
  const { insertUserMeasurement } = useHealthService();

  const onSubmit = handleSubmit(async data => {
    const newMeasurement = {
      datetime: getUTCDateFromDateAndTimeStrings(data.date, data.time),
      heartRate: data.heartRate,
      systolic: data.systolic,
      diastolic: data.diastolic,
    };

    await insertUserMeasurement(newMeasurement);
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={5} direction={["column", "column", "column", "row"]}>
        <FormControl isInvalid={!!formState.errors.date}>
          <FormLabel>Date</FormLabel>
          <Input type="date" {...register("date", { required: true })} />
        </FormControl>
        <FormControl isInvalid={!!formState.errors.time}>
          <FormLabel>Time</FormLabel>
          <Input type="time" {...register("time", { required: true })} />
        </FormControl>
        <FormControl isInvalid={!!formState.errors.heartRate}>
          <FormLabel>Heart Rate (bpm)</FormLabel>
          <Input
            type="number"
            {...register("heartRate", numericValidationRule)}
          />
          <FormErrorMessage>
            {formState.errors.heartRate?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!formState.errors.systolic}>
          <FormLabel>Systolic</FormLabel>
          <Input
            type="number"
            {...register("systolic", numericValidationRule)}
          />
          <FormErrorMessage>
            {formState.errors.systolic?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!formState.errors.diastolic}>
          <FormLabel>Diastolic</FormLabel>
          <Input
            type="number"
            {...register("diastolic", numericValidationRule)}
          />
          <FormErrorMessage>
            {formState.errors.diastolic?.message}
          </FormErrorMessage>
        </FormControl>
      </Stack>
      <StackDivider height={5} />
      <Flex justifyContent="end">
        <Button type="submit" colorScheme="green">
          Add
        </Button>
      </Flex>
    </form>
  );
};

export default MeasurementForm;
