import { Email, Password } from '../../../../shared/domain/entities';
import { CredentialEntity } from '../entities';

const create = (email: Email, password: Password): CredentialEntity => ({
    email,
    password,
});

const isValidEmailLength = (email: Email): boolean => {
    return email.length > 0;
};

const isValidPasswordLength = (password: Password): boolean => {
    return password.length > 0;
};

const isValidEmailFormat = (email: Email): boolean => {
    return email.includes('@');
};

const isValidPasswordFormat = (password: Password): boolean => {
    return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/) ? true : false;
};

export { create, isValidEmailLength, isValidPasswordLength, isValidEmailFormat, isValidPasswordFormat };