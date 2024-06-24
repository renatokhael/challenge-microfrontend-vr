
    export type RemoteKeys = 'host/header';
    type PackageType<T> = T extends 'host/header' ? typeof import('host/header') :any;