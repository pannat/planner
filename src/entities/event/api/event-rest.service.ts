import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventDto } from '../libs';

@Injectable({
  providedIn: 'root'
})
export class EventRestService {
  httpClient = inject(HttpClient);

  createEvent(body: Record<string, string>) {
    return this.httpClient.post<EventDto>('/api/event/add', body);
  }
}
