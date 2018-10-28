export function assertNever(obj: never, errorMessage: string): never {
    throw new Error(errorMessage);
}
