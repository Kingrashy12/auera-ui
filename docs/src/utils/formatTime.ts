const formatTime = (timestamp: Date) => {
  //TODO: Make this function utility based with multiple format case
  const data = new Date(timestamp);
  const time = data.toLocaleDateString("en-us", {
    day: "2-digit",
    month: "short",
  });
  return time;
};

export { formatTime };
