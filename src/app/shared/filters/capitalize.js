export default (input, all) => {
    const REGEX_ALL = /([^\W_]+[^\s-]*) */g;
    const REGEX_FIRST = /([^\W_]+[^\s-]*)/;

    if (!input) {
        return '';
    } else {
        const regex = (all) ? REGEX_ALL : REGEX_FIRST;
        return input.replace(regex, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }
}