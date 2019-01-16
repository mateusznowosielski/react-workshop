import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { RestLink } from "apollo-link-rest";
import { withClientState } from "apollo-link-state";
import { onError } from 'apollo-link-error';
import { ApolloLink } from "apollo-link";
import { ApolloClient } from 'apollo-client';


export interface ISrmConfig {
    register(): void;
    srmConfigParams?: SrmConfigParams;
    readonly cache: InMemoryCache | undefined;
    readonly stateLink: ApolloLink | undefined;
    readonly restLink: RestLink | undefined;
    readonly graphQlLink: HttpLink | undefined;
    readonly errorLink: ApolloLink | undefined;
    readonly client: ApolloClient<any>;
}

export interface SrmConfigParams {
    graphQlUri?: string,
    restApiUri?: string,
    resolvers?: any | (() => any);
}

export default class SrmConfig implements ISrmConfig {
    private _cache?: InMemoryCache;
    private _errorLink?: ApolloLink;
    private _stateLink?: ApolloLink;
    private _restLink?: RestLink;
    private _graphQlLink?: HttpLink;
    private _link?: ApolloLink;
    private _client?: ApolloClient<any>;

    constructor (public srmConfigParams?: SrmConfigParams) {}

    register(): void {
        this._cache = new InMemoryCache();
        const links: ApolloLink[] = [];

        this._errorLink = onError((data: any) => {
            // console.log('Handling Error', graphQLErrors, networkError, operation, response);
            // console.log('Handling Error', data);
            // @ts-ignore
            // data.networkError.statusCode = 400;
          // @ts-ignore
          // data.networkError.response.status = 200;
            // @ts-ignore
            // response.errors = null;
            // networkError = undefined;
            // if (operation.operationName === "IgnoreErrorsQuery") {
            //     console.log('AAA');
                // @ts-ignore
                //response.errors = null;
            //}
        });

        links.push(this._errorLink);

        this._stateLink = withClientState({
            cache: this._cache,
            resolvers: (this.srmConfigParams && this.srmConfigParams.resolvers) ? this.srmConfigParams.resolvers : []
        });

        links.push(this._stateLink);

        if (this.srmConfigParams && this.srmConfigParams.restApiUri) {
            this._restLink = new RestLink({
                uri: this.srmConfigParams.restApiUri,
                credentials: "include"
            });

            links.push(this._restLink);
        }

        if (this.srmConfigParams && this.srmConfigParams.graphQlUri) {
            this._graphQlLink = new HttpLink({
                uri: this.srmConfigParams.graphQlUri
            });

            links.push(this._graphQlLink);
        }

        this._link = ApolloLink.from(links);

        this._client = new ApolloClient({
            link: this._link,
            cache: this._cache,
            // defaultOptions: {
            //     watchQuery: {
            //         errorPolicy: 'all'
            //     },
            //     query: {
            //         errorPolicy: 'all'
            //     },
            //     mutate: {
            //         errorPolicy: 'all'
            //     }
            // }
        });
    }

    get cache(): InMemoryCache | undefined {
        return this._cache;
    }

    get stateLink(): ApolloLink | undefined {
        return this._stateLink;
    }

    get restLink(): RestLink | undefined {
        return this._restLink;
    }

    get graphQlLink(): HttpLink | undefined {
        return this._graphQlLink;
    }

    get errorLink(): ApolloLink | undefined {
        return this._errorLink;
    }

    get client(): ApolloClient<any> {
        return this._client as ApolloClient<any>;
    }

}