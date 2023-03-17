import { SubRouteRef } from '@backstage/core-plugin-api';
export declare type AnyParams = {
    [param in string]: string;
} | undefined;
export declare type SupplyChainRouteParams = AnyParams & {
    supplyChainName: string;
    namespace: string;
    stageName: string;
    clusterName: string;
};
export declare type SupplyChainDeployerRouteParams = AnyParams & {
    clusterName: string;
    namespace: string;
    supplyChainName: string;
    deliverableCluster: string;
};
export declare const rootRouteRef: import("@backstage/core-plugin-api").RouteRef<undefined>;
export declare const supplyChainRouteRef: SubRouteRef<undefined>;
export declare const supplyChainInstanceRef: SubRouteRef<SupplyChainRouteParams>;
export declare const supplyChainDeployerRef: SubRouteRef<SupplyChainDeployerRouteParams>;
