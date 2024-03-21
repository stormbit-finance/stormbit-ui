import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsEvmAddress(validationOptions?: ValidationOptions) {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'isEvmAddress',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    // Check if the value is a valid EVM address (40 characters hexadecimal)
                    return /^0x[a-fA-F0-9]{40}$/.test(value);
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} must be a valid EVM address`;
                  },
            },
        });
    };
}
