/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum AppRoute {
  Home = 'home',
  Services = 'services',
  About = 'about',
  Resources = 'resources',
  Connect = 'connect',
  Book = 'book',
  JoinTeam = 'join-my-team'
}

export interface ConsultationBooking {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface TeamApplication {
  name: string;
  email: string;
  phone: string;
  background: string;
  motivation: string;
}
