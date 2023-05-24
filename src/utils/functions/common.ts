export const getWindowWidth = () => {

  const { innerWidth: windowWidth } = typeof window !== 'undefined' ? window : { innerWidth: 0 };

  return { windowWidth };
};


export const createSelectOption = (value: string | number) => ({
  value, label: value
});

export const uuid = () => {
  const url = URL.createObjectURL(new Blob());
  const [id] = url.toString().split('/').reverse();
  URL.revokeObjectURL(url);
  return id;
};