// format: 2020-07-10 15:00:00.000
// given just xx:xx time -> get a storagable format to database
export const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const date = new Date();    
    date.setHours(hours, minutes, '00');
    console.log('date: ' + date);
    return date;
}

export const getTodaysRange = () => {
    const start = new Date();
    const end = new Date();
    start.setHours(0, 0, 0);
    end.setHours(23, 59, 59);
    return [start, end];
}