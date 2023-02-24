export const printer = (
  type: string,
  item: any,
  file: string,
  line: number
) => {
  if (type === "normal") {
    return console.log("<<<<<<", item, file, line, ">>>>>>>");
  } else if (type === "success") {
    return console.log("(((((((", item, file, line, ")))))))");
  } else if (type === "error") {
    return console.warn("{{{{{{{", item, file, line, "}}}}}}}");
  }
};
