import {Injectable} from '@angular/core';
import {DexieService} from 'ngx-dexie';
import {DexieServiceEx} from './DexieServiceEx';

@Injectable()
export class IndexedDbService {
 // https://www.npmjs.com/package/ngx-dexie
    constructor(private dexieService: DexieServiceEx) {}

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

    public async getMstLocationInfo(){
        //alert('test');
        var data = null;
        data = await this.dexieService.toArray('MstLocationInfo');
        // var data2 = await this.dexieService.filter('MstLocationInfo',(v) =>
        // {
        //     console.log(v); 
        //     window.alert(v);
        //     return true;
        // });

        // await this.dexieService.filter('MstLocationInfo',(v) => {
        //     return true;
        // });

        // console.log(data2); 
       
        return data;
    }

    public async getMstLocationByRange(latitude:number, longitude:number){
        var half:number = 0.025;
        var data = await this.dexieService
            .where('MstLocationInfo','Latitude').between(latitude-half,latitude+half)
            .and((data) => {
                return longitude-half <= data.Longitude && data.Longitude <= longitude+half;
            })
        return data.toArray();
    }
}