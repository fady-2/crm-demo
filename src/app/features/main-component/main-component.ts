import { Component } from '@angular/core';
import { SharedButtons } from '../../shared/components/shared-button/shared-buttons/shared-buttons';
import { FollowUpComponent } from '../follow-up-componen/follow-up-component/follow-up-component';
import { SharedTableComponent } from "../../shared/components/shared-table.component/shared-table.component";
import { TestButton } from "../test-button/test-button/test-button";

@Component({
  selector: 'app-main-component',
  imports: [SharedButtons, FollowUpComponent, SharedTableComponent, TestButton],
  templateUrl: './main-component.html',
  styleUrl: './main-component.scss',
})
export class MainComponent {

  buttons = [
  
  
    {
    text: 'Import Lead',
    icon: 'icons/upload.png',
    textColor:'#344054',
    className:'import-action',

    borderColor:'#D0D5DD',
    backgroundColor:'#FFFFFF'
  },
  {
    text: 'Create Lead',
    className:'Create-Lead',

    icon: 'icons/plus.png',
    borderColor:'#4C64FF',
backgroundColor:'#4C64FF',
textColor:'#FFFFFF'

},
  {
    text: 'Export',
    backgroundColor:'#101828',
    textColor:'#FFFFFF',
    className:'Export-action',


 
 },

  {
    text: 'Add Action',
    backgroundColor:'#4C64FF',
    textColor:'#FFFFFF',
    


    className:'add-action'
 
 },

  {
    text: '',
    backgroundColor:'#FFFFFF',
    textColor:'#D0D5DD',
    className:'save-action',

    icon: 'icons/save.png',

 },
 {
    text: 'Delete',
    backgroundColor:'#101828',
    textColor:'#FFFFFF',
    className:'Delete-action',

    icon: 'icons/delete.png',

 },



];



}
