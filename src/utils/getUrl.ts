import urls from "./demoUrls";

const getUrl = (demo: string): string => {
  const demoIndex = urls.findIndex((urlObj) => demo in urlObj);
  return urls[demoIndex][demo];
};

export default getUrl;
