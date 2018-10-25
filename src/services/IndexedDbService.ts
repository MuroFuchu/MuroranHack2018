import {Injectable} from '@angular/core';
import {DexieService} from 'ngx-dexie';
 
@Injectable()
export class IndexedDbService {
 // https://www.npmjs.com/package/ngx-dexie
    constructor(private dexieService: DexieService) {}
 
    public addMultipleLocationInfo(locationInfoObjects: Object[]) {
        this.dexieService.addMultiple('MstLocationInfo',locationInfoObjects);
    }

    public addOnePhotoInfo(photoInfoObject: Object) {
        this.dexieService.addOne('TrnPhotoInfo',photoInfoObject);
    }

    public async getTrnPhotoInfoByKey(key: string) {
        var data = null;
        await this.dexieService.getByPrimaryKey('TrnPhotoInfo', key, (item) => {
            data = item;
        });

        return data;
    }
}