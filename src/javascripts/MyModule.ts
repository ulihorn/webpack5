// Variable
// export default let captain = 'Picard';

// Interface
export interface CaptainChecker {
    isGreat(inName: string): boolean;
}

// Function
export function addFirst(inLast: string): string {
    return "Jean Luc " + inLast;
}

// Class
export class Ship {
    name = "Enterprise";
}

// Type alias
export type cap = CaptainChecker;
