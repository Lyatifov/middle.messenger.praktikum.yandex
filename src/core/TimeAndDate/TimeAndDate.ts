export default (string: string) => {
    const timeAndDate = new Date(string).toLocaleString().split(", ");
    const result = { time: timeAndDate[1], date: timeAndDate[0] };
    return result;
};
