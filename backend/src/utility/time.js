// format: 2020-07-10 15:00:00.000
// given just xx:xx time -> get a storagable format to database
export const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(hours, minutes, '00');
    return date;
    // const month = ('0' + (date.getMonth() + 1)).slice(-2);
    // const day = ('0' + date.getDate()).slice(-2);
    // const year = date.getFullYear();
    // const hour = date.getHours();
    // const minutes = date.getMinutes();

    // const formatTime = `${year}-${month}-${day} ${hour}:${minutes}:00`;
    // return new Date(formatTime);
}

export const getTodaysRange = () => {
    const start = new Date();
    const end = new Date();
    start.setHours(0, 0, 0);
    end.setHours(23, 59, 59);
    // const year = date.getFullYear();
    // const month = ('0' + (date.getMonth() + 1)).slice(-2);
    // const day = ('0' + date.getDate()).slice(-2);
    // const today = `${year}-${month}-${day}`
    return [start, end];
}