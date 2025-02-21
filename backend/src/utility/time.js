// format: 2020-07-10 15:00:00.000
// given just xx:xx time -> get a storagable format to database
export const formatTime = (time) => {
    const date = new Date();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();

    const formatTime = `${year}-${month}-${day} ${hour}:${minutes}:00`;
    return new Date(formatTime);
}