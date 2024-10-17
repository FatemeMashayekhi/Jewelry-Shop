import jalaali from "jalaali-js";
export default function DateConverter(dateString: string) {
  const date = new Date(dateString);
  const jalaaliDate = jalaali.toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );
  return `${jalaaliDate.jy}-${jalaaliDate.jm}-${jalaaliDate.jd}`;
}
