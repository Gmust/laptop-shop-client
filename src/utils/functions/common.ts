export const getWindowWidth = () => {

  const { innerWidth: windowWidth } = typeof window !== 'undefined' ? window : { innerWidth: 0 };

  return { windowWidth };
};


export const createSelectOption = (value: string | number) => ({
  value, label: value
});

