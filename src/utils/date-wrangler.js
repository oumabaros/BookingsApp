export function addDays(date,daysToAdd){
    const clone = new Date(date.getTime());
    clone.setDate(clone.getDate() + daysToAdd);
    return clone;
}