import { HttpClient } from "@angular/common/http";
import { Observable, delay, filter, first, map, merge, mergeMap, skip, take, toArray } from "rxjs";
import { OrderBy, SearchRequest } from "./interfaces/search-request.interface";
import { SearchResult } from "./interfaces/search-result.interface";

export class BaseService {
    // private apiUrl: string = 'http://locahost:4200';

    constructor(private httpClient: HttpClient) {
        
    }

    private makeDelay<T>(request:Observable<T>) {
        return request.pipe(delay(1000));
    }

    private getAll<T>(url: string): Observable<T[]> {
        return this.makeDelay(this.httpClient.get<T[]>(`/${url}`));
    }

    protected getById<T>(url: string, id: number): Observable<T> {
        return this.getAll<T>(url).pipe(
            mergeMap(x=> x),
            filter(x=> x["id" as keyof T] == id),
            first()
        ) as Observable<T>;
    }

    protected getByIds  <T>(url: string, ids: number[]): Observable<T> {
        return this.getAll<T>(url).pipe(
            mergeMap(x=> x),
            filter(x=> ids.includes(x["id" as keyof T] as number)),
            toArray()
        ) as Observable<T>;
    }

    protected get<T>(url: string, searchRequest: SearchRequest): Observable<SearchResult<T>> {
        let totalCount = 0;
        return this.getAll<T>(url).pipe(
            mergeMap(res=> {
                totalCount = res.length;

                res.sort((a: T, b: T) =>{
                    if(a[searchRequest.orderBy.fieldName as keyof T] < b[searchRequest.orderBy.fieldName as keyof T]) { 
                        return -1; 
                    }
                    if(a[searchRequest.orderBy.fieldName as keyof T] > b[searchRequest.orderBy.fieldName as keyof T]) { 
                        return 1; 
                    }
                    return 0;
                })

                if (searchRequest.orderBy.order == OrderBy.desc) {
                    res.reverse();
                }
                
                return res.filter(el => el[searchRequest.filter?.fieldName as keyof T] == searchRequest.filter?.value)
            }),
            skip(searchRequest.skip),
            take(searchRequest.take),
            toArray(),
            map(result=> ({
                items: result,
                itemsCount: totalCount
            } as SearchResult<T>))
        );
    }

}
