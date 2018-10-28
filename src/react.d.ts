import * as React from 'react';
declare module 'react' {
    export function useContext<T, C extends React.Context<T>>(C): T;
    export function useEffect(fn: (() => void) | (() => () => void), inputs?: any[]): void;
    export function useMemo<T>(fn: () => T, inputs?: any[]): T;
    export function useState<T>(initialValue?: T, inputs?: any[]): [T, (value: T) => void];
    export function useState<T>(initialValue?: T | null, inputs?: any[]): [T | null, (value: T | null) => void];
}
