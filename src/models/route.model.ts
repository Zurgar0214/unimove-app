import {Entity, model, property} from '@loopback/repository';

@model()
export class Route extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'string',
    required: true,
  })
  origin: string;

  @property({
    type: 'string',
    required: true,
  })
  destination: string;

  @property({
    type: 'date',
    required: true,
  })
  departureTime: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  quota: number;

  @property({
    type: 'object',
    required: true,
  })
  vehicleType: object;

  @property({
    type: 'string',
    required: true,
  })
  carRegistration: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;


  constructor(data?: Partial<Route>) {
    super(data);
  }
}

export interface RouteRelations {
  // describe navigational properties here
}

export type RouteWithRelations = Route & RouteRelations;
