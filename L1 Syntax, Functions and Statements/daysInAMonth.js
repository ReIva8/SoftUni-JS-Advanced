function daysInAMonth(month, year) {
    let line = (year, month) => {
        return new Date(year, month, 0).getDate();
    };
    let daysInMonth = line(year, month);
    console.log(daysInMonth)
}
daysInAMonth(2, 2021);