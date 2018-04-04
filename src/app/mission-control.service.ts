import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class MissionControlService {
  //absorvable string sources
  private missionAnnounceSource = new Subject<string>();
  private missionConformedSource = new Subject<string>();

  //absorvable string streams

  missionAnnounced$ = this.missionAnnounceSource.asObservable();
  missionConformed$ = this.missionConformedSource.asObservable();
  // service message commands
  announceMission(mission : string){
    this.missionAnnounceSource.next(mission);
  }
  conformedMission(astrout :string){
    this.missionConformedSource.next(astrout);
  }
  constructor() { }

}
