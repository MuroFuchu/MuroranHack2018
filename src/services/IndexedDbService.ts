import {Injectable} from '@angular/core';
import {DexieService} from 'ngx-dexie';

@Injectable()
export class IndexedDbService {
 // https://www.npmjs.com/package/ngx-dexie
    constructor(private dexieService: DexieService) {}

    private readonly flg : string = '1';

    public async cheakInitData() {
        var data = null;
        await this.dexieService.getByPrimaryKey('CheakInitData', this.flg, (item) => {
            data = item;
        });
        
        console.log(data);
        if(data){
            console.log('1');
          return false;
        }
        console.log('2');
        return true;
    }

    public cheakedInitData() {
        this.dexieService.addOne('CheakInitData',{"ID":this.flg});
    }

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