export default class DateFilters {
    static toLocaleTime(msTime) {
        return new Date(msTime).toLocaleTimeString();
    }

    static toLocaleDate(msTime){
        return new Date(msTime).toLocaleDateString();
    }
}