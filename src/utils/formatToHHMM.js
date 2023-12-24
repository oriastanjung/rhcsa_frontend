export const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
  
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
  
    return `${formattedHours}:${formattedMinutes}`;
  };


export const convertBooleanToStrings = (dataObj) => {
  const newData = {};
  for (const [key, value] of Object.entries(dataObj)) {
    newData[key] = {
      revisit: Boolean(value.revisit),
      Done: Boolean(value.Done),
    };
  }
  return newData;
};