function removeHtmlTagsAndEntities(str: string) {
  let cleanedStr = str.replace(/<[^>]+>/g, "");

  cleanedStr = cleanedStr.replace(/&nbsp;/g, " ");
  return cleanedStr;
}

export default removeHtmlTagsAndEntities;
