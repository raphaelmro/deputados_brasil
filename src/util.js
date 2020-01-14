export const getAnoAtual = () => {
    return new Date().getFullYear().toString();
};

export const convertUpperCaseToTitleCase = (titleCase) => {
    return titleCase.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
