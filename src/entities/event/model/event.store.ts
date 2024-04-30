import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface EventState {};

const initialState: EventState = {};

@Injectable()
export class EventStore extends ComponentStore<EventState> {
  constructor() {
    super(initialState);
  }
}
