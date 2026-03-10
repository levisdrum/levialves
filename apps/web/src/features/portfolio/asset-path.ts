export const withBasePath = (path: string) => {
  if (/^(https?:)?\/\//.test(path)) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
};
