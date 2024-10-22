import {Entity, model, property} from '@loopback/repository';

@model()
export class Reservation extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  reservationDate: string;

  @property({
    type: 'any',
    required: true,
  })
  client: any;

  @property({
    type: 'any',
    required: true,
  })
  car: any;

  @property({
    type: 'number',
    default: 0,
  })
  total?: number;

  @property({
    type: 'any',
  })
  route?: any;


  constructor(data?: Partial<Reservation>) {
    super(data);
  }
}

export interface ReservationRelations {
  // describe navigational properties here
}

export type ReservationWithRelations = Reservation & ReservationRelations;
