export interface MetaConversionLog {
  leadId: string;
  lead: string;
  journeyStage: string;
  metaEvent: string;
  eventDate: Date;
  status: 'Sent' | 'Pending' | 'Failed';
  failureReason: string | null;
  eventRef: string;
}