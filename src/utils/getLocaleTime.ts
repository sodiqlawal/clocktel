import dayjs from "dayjs";

type LocaleTime = { datetime: Date; timezone: string };

export default function getLocaleTime({ datetime, timezone }: LocaleTime) {
  return dayjs(new Date(datetime).toLocaleString("en", { timeZone: timezone }))
    .locale("en")
    .format("hh:mm A");
}
