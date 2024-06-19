
    export type RemoteKeys = 'cards/cards';
    type PackageType<T> = T extends 'cards/cards' ? typeof import('cards/cards') :any;