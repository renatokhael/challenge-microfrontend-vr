
    export type RemoteKeys = 'cards/cards' | 'cards/shared-context';
    type PackageType<T> = T extends 'cards/shared-context' ? typeof import('cards/shared-context') :T extends 'cards/cards' ? typeof import('cards/cards') :any;