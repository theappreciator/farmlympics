import type { PersonFullName } from '../types/';

export const hydrateName = (id: number, notFound: string, fullNames: PersonFullName[]) => {
    const foundName = fullNames[id];
    if (foundName) {
        return `${fullNames[id].firstName} ${fullNames[id].lastName.substring(0,1)}.`;
    }
    return notFound;
}