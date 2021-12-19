/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://rhyming-nature.gptcperinthalmanna.in';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'vercel';
export const BRAND_NAME = 'GPC Perinthalmanna';
export const SITE_NAME_MULTILINE = ['Rhyming', 'Nature'];
export const SITE_NAME = 'Rhyming Nature';
export const META_DESCRIPTION =
  'Rhyming nature international poetry festival event is conducted by Govt Polytechnic college Perinthalmnna and National Digital Library of India Club';
export const SITE_DESCRIPTION =
  'An interactive online experience by the GPC Perinthalmanna, free for everyone.';
export const DATE = 'December 19, 2021';
export const SHORT_DATE = 'Dec 19 - 5:30pm IST';
export const FULL_DATE = 'Dec 19th 5:30pm Indian Standard Time (GMT+5:30)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';
export const CREATOR = "Amjed Ali K"
export const CREATOR_LINK = "https://github.com/amjed-ali-k"

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = "Govt Polytechnic College, Perinthalmanna";

export const CODE_OF_CONDUCT =
  'https://www.notion.so/vercel/Code-of-Conduct-Example-7ddd8d0e9c354bb597a0faed87310a78';

export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Inauguration',
    route: '/stage/a'
  },
  {
    name: 'Recitation Section',
    route: '/stage/recitation'
  },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Speakers',
    route: '/speakers'
  },
  {
    name: 'Hosts',
    route: '/expo'
  }
];

export type TicketGenerationState = 'default' | 'loading';
