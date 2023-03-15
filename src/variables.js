const variables = {
    install(app) {
        app.config.globalProperties.$space = ' ';
    },
};
export default variables;

export function toMail(str) {
    const string = str
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, '');
    return string;
}

export function toNom(str) {
    return str.toUpperCase();
}

export function toPrenom(str) {
    const initiale = str.charAt(0).toUpperCase();
    const reste = str.slice(1).toLowerCase();
    return initiale + reste;
}