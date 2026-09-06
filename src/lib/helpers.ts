export const slugify = (str: string) => {
  if (!str) return str;
  const matches = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
  );
  return matches ? matches.map((x) => x.toLowerCase()).join("-") : str;
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatShortDate = (dateStr: string) => {
  const d = new Date(dateStr);
  const month = MONTHS[d.getMonth()];
  const day = String(d.getDate()).padStart(2, "0");
  return `${month} ${day}`;
};

export const formatYear = (dateStr: string) => {
  return String(new Date(dateStr).getFullYear());
};
