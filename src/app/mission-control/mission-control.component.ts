import { Component, OnInit, OnDestroy, Input } from '@angular/core'; 
import { MissionControlService } from '../mission-control.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.css']
})
export class MissionControlComponent implements OnInit, OnDestroy {
  @Input() astronaut :string;
  mission = "No mission announced";
  confirmed =false;
  announced =false;
  subcription :Subscription;

  constructor(private missionService :MissionControlService) {
    this.subcription = missionService.missionAnnounced$.subscribe(mission=>{
      	this.mission = mission;
        this.announced =true;
        this.confirmed =true; 
    });
   }
   confirm(){
     this.confirmed=true;
     this.missionService.conformedMission(this.astronaut);
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

}
