export const getUTCDateFromDateAndTimeStrings = (
  date: string,
  time: string
) => {
  const localDate = new Date(`${date}T${time}`);
  return new Date(
    localDate.getTime() - (localDate.getTimezoneOffset() * 60) / 1000
  );
};

export const getLocalDateTimeStringFromDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleString(Intl.DateTimeFormat().resolvedOptions().locale, {
    dateStyle: "short",
    timeStyle: "short",
  });
};
