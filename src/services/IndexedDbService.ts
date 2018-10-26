import {Injectable} from '@angular/core';
import {DexieService} from 'ngx-dexie';

@Injectable()
export class IndexedDbService {
 // https://www.npmjs.com/package/ngx-dexie
    constructor(private dexieService: DexieService) {}

    private readonly flg : string = '1';
    private readonly CheakInitData : string = 'CheakInitData';
    private readonly MstLocationInfo : string = 'MstLocationInfo';
    private readonly TrnPhotoInfo : string = 'TrnPhotoInfo';
    
    public async cheakInitData() {
        var data = null;
        await this.dexieService.getByPrimaryKey(this.CheakInitData, this.flg, (item) => {
            data = item;
        });
        
        if(data){          
          return false;
        }
        
        return true;
    }

    public cheakedInitData() {
        this.dexieService.addOne(this.CheakInitData,{"ID":this.flg});
    }

    public addMultipleLocationInfo(locationInfoObjects: Object[]) {
        this.dexieService.addMultiple(this.MstLocationInfo,locationInfoObjects);
    }

    public addOnePhotoInfo(photoInfoObject: Object) {
        this.dexieService.addOne(this.TrnPhotoInfo,photoInfoObject);
    }

    public addMultiplePhotoInfo(photoInfoObjects: Object[]) {
        this.dexieService.addMultiple(this.TrnPhotoInfo,photoInfoObjects);
    }

    public async getTrnPhotoInfoByKey(key: string) {
        var data = null;
        await this.dexieService.getByPrimaryKey(this.TrnPhotoInfo, key, (item) => {
            data = item;
        });

        return data;
    }
}