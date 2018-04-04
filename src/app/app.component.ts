import { Component } from '@angular/core';
import { MissionControlService } from './mission-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [MissionControlService]
})
export class AppComponent {
  astronauts = [ 'Neal', 'Armstrom', 'Punam'];
  history : string[] =[];
  missions = [
    'Flying to Moon',
    'Fying to Mars',
    'Flying to Naptune',
    'Flying to Juitor'
  ];
  nextMission =0;
  constructor(private missionService : MissionControlService){
    missionService.missionConformed$.subscribe(astronaut =>{
      this.history.push(`mission ${astronaut} conformed the mission`);
    });
  }
  announce(){
  let mission = this.missions[this.nextMission++];
  this.missionService.announceMission(mission);
  this.history.push(`Mission ${mission} announced`);
  if(this.nextMission>= this.missions.length){
    this.nextMission=0;
  }
}


}
