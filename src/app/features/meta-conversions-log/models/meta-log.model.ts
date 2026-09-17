export interface MetaConversionLog {
  lead :{
    leadId:string;
    leadName:string;
    status: 'Sent' | 'Pending' | 'Failed';
  }
  journeyStage: string;
  metaEvent: string;
  eventDate: Date;
  failureReason: string | null;
  eventRef: string;
}