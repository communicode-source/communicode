import * as types from './../types';

export function validateProjectName(name) {
    return {
        type: types.VALIDATE_PORTFOLIO_PROJECT_NAME,
        data: name
    };
}

export function createNewPortfolioProject() {
    return {
        type: types.CREATE_PORTFOLIO_PROJECT_CLICK
    };
}
