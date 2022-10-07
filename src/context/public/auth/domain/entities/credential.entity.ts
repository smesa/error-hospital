import { Email, Password } from '../../../../shared/domain/entities/types.entity';

export interface CredentialEntity {
    email: Email;
    password: Password;
}
